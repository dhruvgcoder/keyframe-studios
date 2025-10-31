import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to JSON file
const submissionsFile = path.join(__dirname, 'contact-submissions.json');

// Ensure file exists
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, JSON.stringify([], null, 2));
}

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration
transporter.verify((error, success) => {
  if (error) {
    console.log('⚠️  Email configuration error:', error.message);
    console.log('📧 Email notifications are disabled. Please configure .env file.');
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// POST endpoint to save contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const submissionData = {
      ...req.body,
      timestamp: new Date().toISOString(),
      id: Date.now()
    };

    // Read existing submissions
    const existingData = JSON.parse(fs.readFileSync(submissionsFile, 'utf-8'));
    
    // Add new submission
    existingData.push(submissionData);
    
    // Write back to file
    fs.writeFileSync(submissionsFile, JSON.stringify(existingData, null, 2));
    
    console.log('New submission saved:', submissionData);
    
    // Send email notification
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `🎬 New Contact Form Submission from ${submissionData.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px;">
              <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <h2 style="color: #667eea; margin-top: 0; border-bottom: 3px solid #667eea; padding-bottom: 10px;">
                  🎥 New Contact Form Submission
                </h2>
                
                <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-left: 4px solid #667eea; border-radius: 4px;">
                  <p style="margin: 10px 0;"><strong style="color: #764ba2;">👤 Name:</strong> ${submissionData.name}</p>
                  <p style="margin: 10px 0;"><strong style="color: #764ba2;">📧 Email:</strong> <a href="mailto:${submissionData.email}" style="color: #667eea;">${submissionData.email}</a></p>
                  <p style="margin: 10px 0;"><strong style="color: #764ba2;">🎬 Service:</strong> ${submissionData.service}</p>
                  <p style="margin: 10px 0;"><strong style="color: #764ba2;">⏰ Time:</strong> ${new Date(submissionData.timestamp).toLocaleString()}</p>
                </div>
                
                <div style="margin: 20px 0; padding: 20px; background: #fff9e6; border-radius: 4px; border: 1px solid #ffd700;">
                  <h3 style="color: #764ba2; margin-top: 0;">💬 Message:</h3>
                  <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${submissionData.message}</p>
                </div>
                
                <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e9ecef; text-align: center;">
                  <a href="mailto:${submissionData.email}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
                    Reply to ${submissionData.name}
                  </a>
                </div>
                
                <p style="margin-top: 20px; color: #6c757d; font-size: 12px; text-align: center;">
                  This is an automated message from your video editing agency contact form.
                </p>
              </div>
            </div>
          `,
          text: `
New Contact Form Submission

Name: ${submissionData.name}
Email: ${submissionData.email}
Service: ${submissionData.service}
Time: ${new Date(submissionData.timestamp).toLocaleString()}

Message:
${submissionData.message}

---
Reply to: ${submissionData.email}
          `
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email notification sent successfully');
      }
    } catch (emailError) {
      console.error('⚠️  Email sending failed:', emailError.message);
      // Continue even if email fails
    }
    
    res.status(200).json({ 
      success: true, 
      message: 'Submission saved successfully',
      data: submissionData 
    });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error saving submission' 
    });
  }
});

// GET endpoint to retrieve all submissions
app.get('/api/contact', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(submissionsFile, 'utf-8'));
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error reading submissions:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error reading submissions' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Submissions will be saved to: ${submissionsFile}`);
});

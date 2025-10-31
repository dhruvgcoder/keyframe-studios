import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🧪 Testing Email Configuration...\n');

// Show current configuration (hiding password)
console.log('Current Settings:');
console.log(`  Service: ${process.env.EMAIL_SERVICE || 'gmail'}`);
console.log(`  User: ${process.env.EMAIL_USER}`);
console.log(`  Pass: ${process.env.EMAIL_PASS ? '***' + process.env.EMAIL_PASS.slice(-4) : 'NOT SET'}`);
console.log(`  To: ${process.env.EMAIL_TO || process.env.EMAIL_USER}\n`);

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

console.log('Step 1: Verifying connection...');
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ Verification Failed!');
    console.log('Error:', error.message);
    console.log('\n📝 Troubleshooting Steps:');
    console.log('1. Go to https://myaccount.google.com/apppasswords');
    console.log('2. Delete old app passwords');
    console.log('3. Create a NEW app password for "Mail"');
    console.log('4. Copy the 16-character code (remove spaces)');
    console.log('5. Update EMAIL_PASS in .env file');
    console.log('6. Run this test again\n');
    process.exit(1);
  } else {
    console.log('✅ Connection Verified!\n');
    
    console.log('Step 2: Sending test email...');
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: '✅ Test Email - Nodemailer is Working!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #667eea;">🎉 Success!</h2>
          <p>Your email configuration is working correctly.</p>
          <p><strong>From:</strong> ${process.env.EMAIL_USER}</p>
          <p><strong>To:</strong> ${process.env.EMAIL_TO || process.env.EMAIL_USER}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          <hr style="border: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="color: #666;">Contact form notifications are ready!</p>
        </div>
      `,
      text: `Success! Your email configuration is working correctly.\n\nFrom: ${process.env.EMAIL_USER}\nTo: ${process.env.EMAIL_TO || process.env.EMAIL_USER}\nTime: ${new Date().toLocaleString()}\n\nContact form notifications are ready!`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('❌ Send Failed!');
        console.log('Error:', error.message);
        process.exit(1);
      } else {
        console.log('✅ Test Email Sent Successfully!');
        console.log('Message ID:', info.messageId);
        console.log(`\n📬 Check your inbox: ${process.env.EMAIL_TO || process.env.EMAIL_USER}`);
        console.log('(Also check spam folder if not in inbox)\n');
        process.exit(0);
      }
    });
  }
});

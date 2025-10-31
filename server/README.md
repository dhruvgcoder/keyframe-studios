# Contact Form Server

Backend server for handling contact form submissions.

## Features
- Saves form submissions to `contact-submissions.json`
- REST API with GET and POST endpoints
- Ready for email integration

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Start the server:
```bash
node api.js
```

Server will run on `http://localhost:3001`

## API Endpoints

### POST /api/contact
Submit a new contact form
- Body: `{ name, email, service, message }`
- Returns: `{ success: true, data: {...} }`

### GET /api/contact
Retrieve all submissions
- Returns: `{ success: true, data: [...] }`

## Data Storage

All submissions are saved to: `server/contact-submissions.json`

Format:
```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "service": "Corporate Videos",
    "message": "Project details...",
    "timestamp": "2025-10-31T10:30:00.000Z",
    "id": 1730370600000
  }
]
```

## Email Integration (Coming Soon)

To add email forwarding, install nodemailer:
```bash
npm install nodemailer
```

Then add to `api.js`:
```javascript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

// In the POST endpoint, after saving:
await transporter.sendMail({
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com',
  subject: `New Contact Form: ${submissionData.name}`,
  html: `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${submissionData.name}</p>
    <p><strong>Email:</strong> ${submissionData.email}</p>
    <p><strong>Service:</strong> ${submissionData.service}</p>
    <p><strong>Message:</strong> ${submissionData.message}</p>
  `
});
```

## Running Both Servers

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
cd server
node api.js
```

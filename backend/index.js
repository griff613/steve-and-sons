// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const app = express();
const port = process.env.PORT || 5000;

// Replace these with your actual credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'YOUR_REDIRECT_URI';
const REFRESH_TOKEN = 'YOUR_REFRESH_TOKEN';

const oauth2Client = new OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

const sendEmail = async ({ to, subject, body }) => {
  const raw = makeBody(to, 'me', subject, body);
  try {
    const res = await gmail.users.messages.send({
      userId: 'me',
      resource: { raw },
    });
    console.log('Email sent:', res.data);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

const makeBody = (to, from, subject, message) => {
  const str = [
    `Content-Type: text/plain; charset="UTF-8"\n`,
    `MIME-Version: 1.0\n`,
    `Content-Transfer-Encoding: 7bit\n`,
    `to: ${to}\n`,
    `from: ${from}\n`,
    `subject: ${subject}\n\n`,
    message,
  ].join('');
  return Buffer.from(str)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
};

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { to, subject, body } = req.body;
  try {
    await sendEmail({ to, subject, body });
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

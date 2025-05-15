import express from "express";
import cors from "cors";
import twilio from "twilio";
import dotenv from "dotenv";

// Load env varaibles from .env file
dotenv.config();

const app = express();
const port = 5000;

// Twilio credentials from env variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint to send SMS
app.post("/send-sms", async (req, res) => {
  let { to, message } = req.body;

  // Ensure the phone number is in E.164 format
  if (!to.startsWith("+")) {
    to = `+61${to.replace(/^0/, "")}`; // Example for Australian numbers
  }

  try {
    const response = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to,
    });

    res.status(200).json({ success: true, sid: response.sid });
  } catch (err) {
    console.error("Error sending sms:", err);
    res.status(500).json({ success: false, err: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`SErver running on https://localhost:${port}`);
});

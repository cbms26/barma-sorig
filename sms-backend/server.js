import express from "express";
import cors from "cors";
import twilio from "twilio";
import dotenv from "dotenv";

// Load env variables from .env file
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
  let { to, message, ownerMessage, name, service, subService, date, time } =
    req.body;

  // Format client number
  let clientNumber = to;
  if (!clientNumber.startsWith("+")) {
    clientNumber = `+61${clientNumber.replace(/^0/, "")}`;
  }

  const ownerNumber = process.env.OWNER_PHONE_NUMBER || "+610410958270";

  try {
    // Send SMS to client
    const clientResponse = await client.messages.create({
      body: message,
      from: twilioPhoneNumber,
      to: clientNumber,
    });

    // Compose concise owner message
    const ownerMsg =
      ownerMessage ||
      `New booking:
Name: ${name || "N/A"}
Service: ${service || "N/A"}${subService ? ` - ${subService}` : ""}
Date: ${date || "N/A"}
Time: ${time || "N/A"}`;

    // Send SMS to owner
    const ownerResponse = await client.messages.create({
      body: ownerMsg,
      from: twilioPhoneNumber,
      to: ownerNumber,
    });

    res.status(200).json({
      success: true,
      clientSid: clientResponse.sid,
      ownerSid: ownerResponse.sid,
    });
  } catch (err) {
    console.error("Error sending sms:", err);
    res.status(500).json({ success: false, err: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

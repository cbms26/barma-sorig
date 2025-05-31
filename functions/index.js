/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const twilio = require("twilio");

// Use Firebase environment config for secrets
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const ownerNumber = process.env.OWNER_PHONE_NUMBER || "+610410958270";

// Initialize Twilio client
const client = twilio(accountSid, authToken);

exports.sendSms = onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const { to, message, ownerMessage, name, service, subService, date, time } =
    req.body;

  // Format client number
  let clientNumber = to;
  if (!clientNumber.startsWith("+")) {
    clientNumber = `+61${clientNumber.replace(/^0/, "")}`;
  }

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
    logger.error("Error sending sms:", err);
    res.status(500).json({ success: false, err: err.message });
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

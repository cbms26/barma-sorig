/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// // For Checking
// const {onRequest} = require("firebase-functions/v2/https");

// exports.helloTest = onRequest((req, res) => {
//   res.send("✅ Functions are working!");
// });


const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const twilio = require("twilio");

// Use Firebase environment config for secrets
const functions = require("firebase-functions");

const accountSid = functions.config().twilio.sid;
const authToken = functions.config().twilio.token;
const twilioPhoneNumber = functions.config().twilio.phone;
const ownerNumber = functions.config().twilio.owner || "+97517248226";


// Initialize Twilio client
const client = twilio(accountSid, authToken);

exports.sendSms = onRequest(async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const {to, message, ownerMessage, name, service, subService, date, time} =
    req.body;

  // Format client number for Bhutan (+975)
  let clientNumber = to;
  if (!clientNumber.startsWith("+")) {
    clientNumber = `+975${clientNumber.replace(/^0/, "")}`;
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
    res.status(500).json({success: false, err: err.message});
  }
});

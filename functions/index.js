/* eslint-disable max-len */
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


import {onRequest} from "firebase-functions/v2/https";
import {defineSecret} from "firebase-functions/params";
import {error as _error} from "firebase-functions/logger";
import twilio from "twilio";
import cors from "cors";

// Initialize CORS middleware
const corsHandler = cors({origin: ["https://barma-sorig.web.app", "http://localhost:3000"]});

// Define secrets (Note:these must be set with `firebase functions:secrets:set`)
const TWILIO_SID = defineSecret("TWILIO_SID");
const TWILIO_TOKEN = defineSecret("TWILIO_TOKEN");
const TWILIO_PHONE = defineSecret("TWILIO_PHONE");
const TWILIO_OWNER = defineSecret("TWILIO_OWNER");

export const sendSms = onRequest(
    {
      secrets: [TWILIO_SID, TWILIO_TOKEN, TWILIO_PHONE, TWILIO_OWNER],
      enforceAppCheck: true, // Enforce App Check
      // We are now handling CORS manually with the `cors` package
    },
    (req, res) => {
      // Wrap the function with the CORS handler
      corsHandler(req, res, async () => {
        console.log("sendSms function execution started."); // New log to confirm invocation
        if (req.method !== "POST") {
          res.status(405).send("Method Not Allowed");
          return;
        }

        const {to, message, ownerMessage,
          name, service, subService, date, time} = req.body;

        // Format recipient number (Bhutan number)
        let clientNumber = to;
        if (!clientNumber.startsWith("+")) {
          clientNumber = `+975${clientNumber}`;
        }

        const accountSid = TWILIO_SID.value();
        const authToken = TWILIO_TOKEN.value();
        const twilioPhoneNumber = TWILIO_PHONE.value();
        const ownerNumber = TWILIO_OWNER.value();

        const client = twilio(accountSid, authToken);

        // Added for debugging
        console.log("Attempting to send SMS...");
        console.log(`Twilio Account SID: ${accountSid ? "Loaded" : "MISSING"}`);
        console.log(`Twilio Auth Token: ${authToken ? "Loaded" : "MISSING"}`);
        console.log(`Twilio Phone Number: ${twilioPhoneNumber}`);
        console.log(`Owner Number: ${ownerNumber}`);
        console.log(`Raw "to" number from request: ${to}`);
        console.log(`Formatted client number: ${clientNumber}`);


        try {
        // Send to client
          const clientResponse = await client.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: clientNumber,
          });

          // Compose and send to owner
          const ownerMsg =
          ownerMessage ||
          `New booking:
Name: ${name || "N/A"}
Service: ${service || "N/A"}${subService ? ` - ${subService}` : ""}
Date: ${date || "N/A"}
Time: ${time || "N/A"}`;

          const ownerResponse = await client.messages.create({
            body: ownerMsg,
            from: twilioPhoneNumber,
            to: ownerNumber,
          });

          res.status(200).json({
            success: true,
            clientSid: clientResponse.sid,
            ownerSid: ownerResponse.sid,
            version: "v2", // Added version number to response
          });
        } catch (err) {
          _error("Error sending SMS:", err);
          res.status(500).json({success: false, error: err.message});
        }
      });
    });

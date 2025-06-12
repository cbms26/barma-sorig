# Barma Sorig Healing Centre

Welcome to the **Barma Sorig Healing Centre** repository!  
This project was created and is maintained by [cbms26](https://github.com/cbms26) for our family business in Bhutan. It showcases and manages our traditional healing and wellness services.

---

## 🌿 About Barma Sorig

**Barma Sorig** healing combines over a thousand years of Tibetan medical knowledge and spiritual wisdom.  
Our center, in collaboration with Pure Vision Sorig Healing & Research Center (Nepal), offers a wide variety of treatments rooted in tradition, including:

- **Traditional Ku Nye Massage:** Ancient Tibetan oil massage for detoxification, relaxation, and energy flow.
- **Five Nectar (Amrita) Herbal Steam:** Herbal steam therapy for rejuvenation and toxin elimination.
- **Therapeutic Gentle External Therapies (Jyamtse Ku-Nye)**
- **Salon & Spa Services:** Massages, facials, herbal baths, waxing, hair and brow care, and more.
- **Wellness Guidance:** Diet, herbs, seasonal health advice, and guided breathing exercises.

Our treatments are personalized and delivered by highly trained therapists to address physical, emotional, and energetic balance for holistic wellbeing.

---

## 🏗️ Project Structure

This repository is a **monorepo** composed of:

- **Frontend (React + Tailwind CSS):**  
  Main user-facing website and booking interface (`src/`, `public/`)
- **Cloud Functions (Node.js, Firebase):**  
  Backend logic for notifications and data processing (`functions/`)
- **SMS Backend:**  
  Node.js Express server for SMS integration, powered by Twilio (`sms-backend/`)
- **Firebase Hosting & Configuration:**  
  Deployment, authentication, and hosting (`firebase.json`, `.firebaserc`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- (Optional) [Twilio](https://www.twilio.com/) account for SMS features

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/cbms26/barma-sorig.git
   cd barma-sorig
   ```

2. **Install dependencies:**
   ```bash
   npm install
   cd functions && npm install
   cd ../sms-backend && npm install
   cd ..
   ```

3. **Configure Firebase:**
   - Edit `.firebaserc` and `firebase.json` as needed.
   - Set up environment variables for sensitive keys.

4. **Start the development server:**
   ```bash
   npm start
   ```

---

## ✨ Features

- **Modern, responsive UI** built with React and Tailwind CSS.
- **Service catalog**: Explore traditional therapies and modern salon/spa services.
- **Booking and inquiries**: Easy navigation to treatments and healer profiles.
- **Holistic health content**: Learn about Tibetan medicine, Ku Nye, Nine Breathing Exercise, and more in the blog.
- **Cloud Functions** for backend automation, notifications, and data processing.
- **SMS Backend** for appointment reminders and communication.

---

## 🗂️ Key Scripts

| Command                          | Description                                         |
|-----------------------------------|-----------------------------------------------------|
| `npm start`                      | Start the React development server                  |
| `npm run build`                   | Build the frontend for production                   |
| `npm run deploy`                  | Deploy to Firebase Hosting                          |
| `cd functions && npm run serve`   | Start Firebase functions locally                    |
| `cd sms-backend && node index.js` | Run the SMS backend server                          |

---

## 🛠️ Technologies Used

- **React** & **React Router**
- **Tailwind CSS**
- **Firebase** (Hosting, Functions, Auth)
- **Twilio** (SMS Notifications)
- **Node.js** (Backend & Functions)
- **Express** (SMS backend)
- **Eslint** & **Prettier** (Code quality)

---

## 📁 Directory Overview

- `/src` — Frontend source code (pages, components, data, styles)
- `/functions` — Firebase Cloud Functions
- `/sms-backend` — Node.js Express backend for SMS
- `/public` — Static assets and HTML template
- `.firebaserc`, `firebase.json` — Firebase project configuration
- `tailwind.config.js` — Tailwind CSS config

---

## 🏠 About This Project

This project was developed by cbms26 for the Barma Sorig Healing Centre, a family business in Bhutan.  
It is made public for transparency and learning purposes. If you would like to use any part of this code or collaborate, please contact the repository owner.

---

## 📜 License

**No open source license is provided at this time.**  
You are welcome to view the code and learn from it.  
For any use, modification, or distribution beyond personal learning, please contact the author for permission.

---

## 📞 Contact

For business or technical inquiries, contact:  
**Barma Sorig Healing Centre**  
GitHub: [cbms26](https://github.com/cbms26)

---

**Experience the transformative power of Barma-Sorig healing — restoring balance, harmony, and wellbeing.**

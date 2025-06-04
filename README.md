# Barma Sorig Healing Centre

Welcome to the **Barma Sorig Healing Centre** repository. This project brings the ancient Barma-Sorig tradition of holistic healing from the Himalayas into a modern web application. It is designed to introduce, manage, and promote the center’s unique therapies, treatments, and wellness services, both for practitioners and for guests seeking holistic wellbeing.

---

## 🌿 About Barma Sorig

**Barma-Sorig** healing combines over a thousand years of Tibetan medical knowledge and spiritual wisdom. Our center, based in Bhutan and in collaboration with Pure Vision Sorig Healing & Research Center (Nepal), offers a variety of treatments rooted in tradition, including:

- **Traditional Ku Nye Massage:** Ancient Tibetan oil massage for detoxification, relaxation, and energy flow.
- **Five Nectar (Amrita) Herbal Steam:** Herbal steam therapy for rejuvenation and toxin elimination.
- **Therapeutic Gentle External Therapies (Jyamtse Ku-Nye)**
- **Salon & Spa Services:** Including massages, facials, herbal baths, waxing, hair and brow care, and more.
- **Wellness Guidance:** Diet, herbs, seasonal health advice, and guided breathing exercises.

Our aim is to provide **personalized treatments** that address physical, emotional, and energetic balance, guided by highly trained therapists.

---

## 🧑‍💻 Project Structure

This repository is organized as a **monorepo** with the following components:

- **Frontend (React + Tailwind CSS):**  
  Main user-facing website and booking interface (`src/`, `public/`)
- **Cloud Functions (Node.js, Firebase):**  
  Backend logic for notifications, data processing, etc. (`functions/`)
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

   - Edit `.firebaserc` and `firebase.json` if needed.
   - Set up environment variables for sensitive keys (see `.env.example` if available).

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

| Command                | Description                                         |
|------------------------|-----------------------------------------------------|
| `npm start`            | Start the React development server                  |
| `npm run build`        | Build the frontend for production                   |
| `npm run deploy`       | Deploy to Firebase Hosting                          |
| `cd functions && npm run serve` | Start Firebase functions locally           |
| `cd sms-backend && node index.js` | Run the SMS backend server             |

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

## 🤝 Contributing

Contributions are welcome! If you have suggestions, ideas, or want to help improve the center’s digital experience, please open an issue or submit a pull request.

---

## 📞 Contact

For more information about Barma Sorig Healing Centre or for technical support, please reach out via the [issues page](https://github.com/cbms26/barma-sorig/issues) or contact the project maintainers.

---

## 📜 License

This project is for informational and wellness purposes. See `LICENSE` file for details.

---

**Experience the transformative power of Barma-Sorig healing — restoring balance, harmony, and wellbeing.**

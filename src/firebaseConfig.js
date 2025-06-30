import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6_zKd6bwtXJpqpKsEWQl2ROObk-tX1Zo",
  authDomain: "barma-sorig.firebaseapp.com",
  projectId: "barma-sorig",
  storageBucket: "barma-sorig.firebasestorage.app",
  messagingSenderId: "709223465602",
  appId: "1:709223465602:web:614b65831278697f162a9b",
  measurementId: "G-XHYRV617DL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize App Check
initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LcBfXIrAAAAADFux1k8WdiDpq3sUXgY2GiBHabR"),

  // Optional argument. If true, the SDK automatically refreshes tokens as needed.
  isTokenAutoRefreshEnabled: true,
});

// Initialize Firestore
const db = getFirestore(app);

export { db };

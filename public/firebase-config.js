// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYiVLsXDT-JuGUdAQ7wAHLfZxJD2Fm0cs",
  authDomain: "zengince-web.firebaseapp.com",
  projectId: "zengince-web",
  storageBucket: "zengince-web.firebasestorage.app",
  messagingSenderId: "359876297831",
  appId: "1:359876297831:web:8be84568cb102d891880c2",
  measurementId: "G-2LWT08BL6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export instances if needed for other modules
export { app, analytics, auth, db };

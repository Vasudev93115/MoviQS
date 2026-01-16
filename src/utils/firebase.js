// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDTVfHhht81vrmTyQASj9iWYJujCEGoto",
  authDomain: "netflixgpt-eff89.firebaseapp.com",
  projectId: "netflixgpt-eff89",
  storageBucket: "netflixgpt-eff89.firebasestorage.app",
  messagingSenderId: "36219001269",
  appId: "1:36219001269:web:1149089b169b3f141d21fc",
  measurementId: "G-M01L3N5199"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
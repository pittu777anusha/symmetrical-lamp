// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmGQvOpVA624PyKkjY_joJ-MargkgQ2Tc",
  authDomain: "cmsdashboard1.firebaseapp.com",
  projectId: "cmsdashboard1",
  storageBucket: "cmsdashboard1.appspot.com",
  messagingSenderId: "974226279590",
  appId: "1:974226279590:web:e911a98d095f5a5d66b867",
  measurementId: "G-NRKHQ96YS5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
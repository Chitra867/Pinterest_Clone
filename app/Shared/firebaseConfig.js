// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbBJZ3r1eTjS_wogGz1ys72kHrYyefzyM",
  authDomain: "pinterestclone-bc45d.firebaseapp.com",
  projectId: "pinterestclone-bc45d",
  storageBucket: "pinterestclone-bc45d.firebasestorage.app",
  messagingSenderId: "985939319382",
  appId: "1:985939319382:web:e7b424f48f023f476c39f7",
  measurementId: "G-15G89N7CKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
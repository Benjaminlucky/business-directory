// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv63EvpDOav2MsuRwJymemuYwpC51slaY",
  authDomain: "mobileapps-b806a.firebaseapp.com",
  projectId: "mobileapps-b806a",
  storageBucket: "mobileapps-b806a.firebasestorage.app",
  messagingSenderId: "1065991978595",
  appId: "1:1065991978595:web:4d631a262921d71d640256",
  measurementId: "G-51KT2WCX9P",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);

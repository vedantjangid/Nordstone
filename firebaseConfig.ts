// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore"; // Import Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwKhwtE3fAzxvYytYhhPiD7SBX1yu5rz4",
  authDomain: "nordstone-96138.firebaseapp.com",
  projectId: "nordstone-96138",
  storageBucket: "nordstone-96138.appspot.com",
  messagingSenderId: "700180847232",
  appId: "1:700180847232:web:b29ef0e592236bbd00e465",
  measurementId: "G-3186B0CTJJ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);

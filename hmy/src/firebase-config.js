// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ6n3XWys_gRIOPRBqtWbcWzCD8EmeZI8",
  authDomain: "hmyhack-6421a.firebaseapp.com",
  projectId: "hmyhack-6421a",
  storageBucket: "hmyhack-6421a.appspot.com",
  messagingSenderId: "874507739253",
  appId: "1:874507739253:web:e46c4016539b21dbe2183c",
  measurementId: "G-FJTV8JWJN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhtUn10iWgeN91xWs3L9lI7wJoeWP3Kmk",
  authDomain: "swd-eksamen.firebaseapp.com",
  databaseURL: "https://swd-eksamen-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "swd-eksamen",
  storageBucket: "swd-eksamen.appspot.com",
  messagingSenderId: "933553372898",
  appId: "1:933553372898:web:ca3b01c8741e9a654aa8bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
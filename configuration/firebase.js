// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore, collection} from 'firebase/firestore'

import {getAuth} from 'firebase/auth'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUQqgccqSUzqvfMCdQ61-WoGHtZzQW0AA",
  authDomain: "budget-buddy-d6915.firebaseapp.com",
  projectId: "budget-buddy-d6915",
  storageBucket: "budget-buddy-d6915.appspot.com",
  messagingSenderId: "348380862390",
  appId: "1:348380862390:web:7f65db0929a43aefaf9317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripsRef = collection(db, 'trips')
export const expensesRef = collection(db, 'expenses')

export default app;
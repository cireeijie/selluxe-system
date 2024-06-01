// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQI6FCnQQjGqEWOUWJkLz6uJkF8TEfwVc",
  authDomain: "selluxe-system.firebaseapp.com",
  projectId: "selluxe-system",
  storageBucket: "selluxe-system.appspot.com",
  messagingSenderId: "776344391962",
  appId: "1:776344391962:web:0e1fc02a10d7fa7824dca3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

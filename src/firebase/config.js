// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswR23LqKwrjWEIC8WINtSVd0zqYuWfhA",
  authDomain: "datos-shop.firebaseapp.com",
  projectId: "datos-shop",
  storageBucket: "datos-shop.appspot.com",
  messagingSenderId: "188365988019",
  appId: "1:188365988019:web:77b28bd7479bd457b7d0c6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

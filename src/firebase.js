// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlT7HUgoBAl9p_8QbL9qh4fbBuR0hiqTM",
  authDomain: "rajadecors.firebaseapp.com",
  projectId: "rajadecors",
  storageBucket: "rajadecors.appspot.com",
  messagingSenderId: "1032154190135",
  appId: "1:1032154190135:web:87443444cf3df644990ab2",
  measurementId: "G-M20FN9RNS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjHu3YX4_lCJxR_mi2Fn8IT29Y44eWCIE",
  authDomain: "genius-car-2f75b.firebaseapp.com",
  projectId: "genius-car-2f75b",
  storageBucket: "genius-car-2f75b.appspot.com",
  messagingSenderId: "907830302579",
  appId: "1:907830302579:web:38e0e702a33cd3e922d706"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

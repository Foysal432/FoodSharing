// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpHuXiW0mrUAPUYM8BJe_NAxsmvQR1h7o",
  authDomain: "assingment-11-3581c.firebaseapp.com",
  projectId: "assingment-11-3581c",
  storageBucket: "assingment-11-3581c.appspot.com",
  messagingSenderId: "798563965899",
  appId: "1:798563965899:web:b8c5bf185acb8d8c00b44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
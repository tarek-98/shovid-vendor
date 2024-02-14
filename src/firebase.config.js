// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCODBA6HuFDmcauApg2Yyvo-TxAYNoH9nY",
  authDomain: "otp-ver-671bd.firebaseapp.com",
  projectId: "otp-ver-671bd",
  storageBucket: "otp-ver-671bd.appspot.com",
  messagingSenderId: "488175274364",
  appId: "1:488175274364:web:55d5178fa7e395cb42bcf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

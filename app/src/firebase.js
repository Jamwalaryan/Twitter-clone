// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//const fireBase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyDvG0RtxcRJ2mxi6tJrQs_SOFU_913jTBo",
  authDomain: "react-auth-login-81bf2.firebaseapp.com",
  projectId: "react-auth-login-81bf2",
  storageBucket: "react-auth-login-81bf2.appspot.com",
  messagingSenderId: "589813676732",
  appId: "1:589813676732:web:b933752aa93d4cf3e6eeb9"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const auth = getAuth(app);
const firebaseApp=firebase.initializeApp(firebaseConfig)
export const db=firebaseApp.firestore()
export default app;
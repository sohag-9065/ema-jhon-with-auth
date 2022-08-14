// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH9M4iC6MXUrXYp_vD5HUdGk1oA4eBFXU",
  authDomain: "ema-jhon-simple-5d2d3.firebaseapp.com",
  projectId: "ema-jhon-simple-5d2d3",
  storageBucket: "ema-jhon-simple-5d2d3.appspot.com",
  messagingSenderId: "649771082968",
  appId: "1:649771082968:web:e887cc1aba573490a963ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
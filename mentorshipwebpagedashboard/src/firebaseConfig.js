// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcwxfV2oUFQLP-XO_w8Fg6TwOF8tPUMEU",
  authDomain: "industrial-project-add15.firebaseapp.com",
  projectId: "industrial-project-add15",
  storageBucket: "industrial-project-add15.appspot.com",
  messagingSenderId: "395380174640",
  appId: "1:395380174640:web:5f09c58659e150528822f5",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

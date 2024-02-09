// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASDz-KmRx3GC2ZSW_zfalgqsY9GY0enOQ",
  authDomain: "visualvibes-2e78d.firebaseapp.com",
  projectId: "visualvibes-2e78d",
  storageBucket: "visualvibes-2e78d.appspot.com",
  messagingSenderId: "346437477458",
  appId: "1:346437477458:web:9a773411f8e9f5722f6b8b",
  measurementId: "G-EPEKVY6L1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
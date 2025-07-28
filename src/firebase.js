// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDAqouFd6ZalsoKrNVSqVpsgsxvuz1-AMU",
  authDomain: "recipeapp-b8374.firebaseapp.com",
  projectId: "recipeapp-b8374",
  storageBucket: "recipeapp-b8374.firebasestorage.app",
  messagingSenderId: "744294098049",
  appId: "1:744294098049:web:53a6e691cf74416cb6d980",
  measurementId: "G-60N15MEJL8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

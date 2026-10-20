import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3y5dQZpR5ZDWZYtk3uNGbgNy6OqQ6kE0",
  authDomain: "deeplalkumar-a0cc7.firebaseapp.com",
  projectId: "deeplalkumar-a0cc7",
  storageBucket: "deeplalkumar-a0cc7.firebasestorage.app",
  messagingSenderId: "486377143304",
  appId: "1:486377143304:web:c7e39580c978c4cbc4e5bd",
  measurementId: "G-B4KN3CK3X9",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
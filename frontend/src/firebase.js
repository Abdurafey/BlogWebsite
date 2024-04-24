// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-2203f.firebaseapp.com",
  projectId: "blog-app-2203f",
  storageBucket: "blog-app-2203f.appspot.com",
  messagingSenderId: "16797486057",
  appId: "1:16797486057:web:cf0e5fac60ab02d0835978"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
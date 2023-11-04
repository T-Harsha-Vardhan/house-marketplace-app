import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw9XMPbasrY_DIQ4r17zTryPzlFTUwzts",
  authDomain: "house-marketplace-app-devthv.firebaseapp.com",
  projectId: "house-marketplace-app-devthv",
  storageBucket: "house-marketplace-app-devthv.appspot.com",
  messagingSenderId: "487197392913",
  appId: "1:487197392913:web:a85f0088504097a8af31b0",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

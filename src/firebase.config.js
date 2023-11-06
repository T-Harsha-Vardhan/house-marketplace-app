import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQwgYC8qi6SAVS02fvC_rTu7_q3zykRc",
  authDomain: "house-market-app-devharsh.firebaseapp.com",
  projectId: "house-market-app-devharsh",
  storageBucket: "house-market-app-devharsh.appspot.com",
  messagingSenderId: "565505499310",
  appId: "1:565505499310:web:4b7e4a102f8d075c5b4d3f",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

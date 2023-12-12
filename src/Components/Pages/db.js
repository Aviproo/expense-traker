import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFbungoGiwENxUff9H_Sc492Hwqm6x0es",
  authDomain: "expense-tracker-a250f.firebaseapp.com",
  projectId: "expense-tracker-a250f",
  storageBucket: "expense-tracker-a250f.appspot.com",
  messagingSenderId: "342330534576",
  appId: "1:342330534576:web:9ecb96d08b51b77ab66975",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

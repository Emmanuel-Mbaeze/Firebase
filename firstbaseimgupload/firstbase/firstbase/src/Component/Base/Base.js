import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBatM33ewsH7TLFz7tPtfhzz7tK-VhYjIQ",
  authDomain: "first-firebase-b65bc.firebaseapp.com",
  projectId: "first-firebase-b65bc",
  storageBucket: "first-firebase-b65bc.appspot.com",
  messagingSenderId: "388820348290",
  appId: "1:388820348290:web:0ae2826d2f196f1602739b",
});

const ab = getFirestore(app);

export { ab };

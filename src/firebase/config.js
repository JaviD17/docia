import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7Ygmmmb4X2rxfG4e5vz8vN6HueoQ7dgE",
  authDomain: "docia-29310.firebaseapp.com",
  projectId: "docia-29310",
  storageBucket: "docia-29310.appspot.com",
  messagingSenderId: "583331872150",
  appId: "1:583331872150:web:253b00054a5bc6b5c5f1b7",
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };

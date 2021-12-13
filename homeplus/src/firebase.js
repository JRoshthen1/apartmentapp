import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBKowHN2MNsniZ11qs0SbT8JPl5dJ0_n3Y",
  authDomain: "homeplus-5c895.firebaseapp.com",
  projectId: "homeplus-5c895",
  storageBucket: "homeplus-5c895.appspot.com",
  messagingSenderId: "678768152633",
  appId: "1:678768152633:web:ae5217d3661ec5460a3de8",
  measurementId: "G-F1GBEMBZ8Q"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(app);

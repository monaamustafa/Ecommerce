import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAsCl3hrHhgXuVnPgYScM8r3kZ9m-vummQ",
  authDomain: "moon-59d4b.firebaseapp.com",
  projectId: "moon-59d4b",
  storageBucket: "moon-59d4b.appspot.com",
  messagingSenderId: "1044649163898",
  appId: "1:1044649163898:web:a785828aa5c257ace04fc3",
  measurementId: "G-8PC3J4LH78"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTVAXqpNfugjj-hnh4jtXmT4BY1JJm5Rw",
  authDomain: "prueba-smart-talent.firebaseapp.com",
  projectId: "prueba-smart-talent",
  storageBucket: "prueba-smart-talent.appspot.com",
  messagingSenderId: "119062620116",
  appId: "1:119062620116:web:ff7eade176c93bff8e9841",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

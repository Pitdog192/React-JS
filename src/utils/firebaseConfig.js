// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBR7212fK9-lxVY5xe4whXCFlBoDxDrSAk",
    authDomain: "react-proyect-coder.firebaseapp.com",
    projectId: "react-proyect-coder",
    storageBucket: "react-proyect-coder.appspot.com",
    messagingSenderId: "881704334865",
    appId: "1:881704334865:web:7ca6c84bdb6b9dda74e3b0",
    measurementId: "G-W0EHM40FHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
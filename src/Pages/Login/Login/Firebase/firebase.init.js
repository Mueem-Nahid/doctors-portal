import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig";

const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;
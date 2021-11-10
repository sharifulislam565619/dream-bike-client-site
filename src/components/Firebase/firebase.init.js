import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.confic";

const initializationAuth = () => {
   initializeApp(firebaseConfig);
}

export default initializationAuth;
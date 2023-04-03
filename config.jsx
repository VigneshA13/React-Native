// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//--------------------------------------------------
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBt-R6nAY_ejFrxc_tqdQr6eZ3_Y75SKE",
  authDomain: "new-react-native-59ca3.firebaseapp.com",
  projectId: "new-react-native-59ca3",
  storageBucket: "new-react-native-59ca3.appspot.com",
  messagingSenderId: "367963199377",
  appId: "1:367963199377:web:cb83f2dd5a13131de5ac30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//change-----------------------------------------------------------
export const db = getDatabase(app);
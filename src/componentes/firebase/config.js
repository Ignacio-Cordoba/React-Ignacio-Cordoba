// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTPvkfnxukc6YwbnQL4eUMbWbvbtfF3LA",
  authDomain: "cordobapeek.firebaseapp.com",
  projectId: "cordobapeek",
  storageBucket: "cordobapeek.appspot.com",
  messagingSenderId: "366332352560",
  appId: "1:366332352560:web:44dba36d79ae525fa135f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)
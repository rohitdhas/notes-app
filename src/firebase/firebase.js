import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQZoIqEic0EimdpCMJARta9YfHB4qL5Gs",
  authDomain: "keep-clone-35e4f.firebaseapp.com",
  projectId: "keep-clone-35e4f",
  storageBucket: "keep-clone-35e4f.appspot.com",
  messagingSenderId: "545142521857",
  appId: "1:545142521857:web:c45ef28d217f6828f64000"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }


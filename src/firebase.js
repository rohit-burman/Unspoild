// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_no16vNfV67jsuBfen4hlmR7oentV9e8",
  authDomain: "unspoild-fdf37.firebaseapp.com",
  projectId: "unspoild-fdf37",
  storageBucket: "unspoild-fdf37.appspot.com",
  messagingSenderId: "417987505418",
  appId: "1:417987505418:web:1e1c607b2b6a231d069ef3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export default db;

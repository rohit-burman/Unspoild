// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { app } from "./firebase_auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA_no16vNfV67jsuBfen4hlmR7oentV9e8",
//   authDomain: "unspoild-fdf37.firebaseapp.com",
//   projectId: "unspoild-fdf37",
//   storageBucket: "unspoild-fdf37.appspot.com",
//   messagingSenderId: "417987505418",
//   appId: "1:417987505418:web:1e1c607b2b6a231d069ef3",
// };

const firebaseConfig = {
  apiKey: "AIzaSyCyIIbMfuoY5hbrGi9XTQIGvfWhsJIne6k",
  authDomain: "first-tut-e8ef4.firebaseapp.com",
  databaseURL: "https://first-tut-e8ef4-default-rtdb.firebaseio.com",
  projectId: "first-tut-e8ef4",
  storageBucket: "first-tut-e8ef4.appspot.com",
  messagingSenderId: "967624353274",
  appId: "1:967624353274:web:8e086e72595bfe4176b043"
};

//Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default db;

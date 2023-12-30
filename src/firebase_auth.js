import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, get, child,serverTimestamp } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyIIbMfuoY5hbrGi9XTQIGvfWhsJIne6k",
    authDomain: "first-tut-e8ef4.firebaseapp.com",
    databaseURL: "https://first-tut-e8ef4-default-rtdb.firebaseio.com",
    projectId: "first-tut-e8ef4",
    storageBucket: "first-tut-e8ef4.appspot.com",
    messagingSenderId: "967624353274",
    appId: "1:967624353274:web:8e086e72595bfe4176b043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth(app);
const dbref = ref(database)

export { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set ,dbref,serverTimestamp,app,get};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "code-for-aurora.firebaseapp.com",
  projectId: "code-for-aurora",
  storageBucket: "code-for-aurora.appspot.com",
  messagingSenderId: "24171468767",
  appId: "1:24171468767:web:f6659ea368fb2c4b5c166a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getDatabase(app);


export { auth, db };
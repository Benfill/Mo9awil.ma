// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, getAuth  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLMiEklw1Y-jWD1eshWQPChp9ZL-C9h78",
  authDomain: "charikati-9796a.firebaseapp.com",
  projectId: "charikati-9796a",
  storageBucket: "charikati-9796a.appspot.com",
  messagingSenderId: "851172763118",
  appId: "1:851172763118:web:81e389ed1b6dc926de1aff",
  measurementId: "G-39DYK6VCR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const facebook = new FacebookAuthProvider();
export const google = new GoogleAuthProvider();
google.setCustomParameters({   
  prompt : "select_account "
});

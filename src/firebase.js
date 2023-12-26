// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAncOGWgLUhdqhgykvrTRMZNRCnrPe4ZMg",
  authDomain: "simple-crm-727d4.firebaseapp.com",
  projectId: "simple-crm-727d4",
  storageBucket: "simple-crm-727d4.appspot.com",
  messagingSenderId: "822565337424",
  appId: "1:822565337424:web:e3cdba14714b9a52d2d455",
  measurementId: "G-0GF75ZM7DY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

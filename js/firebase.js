// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIwU6gd89NJnFH0sAJGzE1XwCv9wGPQXQ",
    authDomain: "freshie-uel.firebaseapp.com",
    databaseURL: "https://freshie-uel-default-rtdb.firebaseio.com",
    projectId: "freshie-uel",
    storageBucket: "freshie-uel.appspot.com",
    messagingSenderId: "665183320448",
    appId: "1:665183320448:web:d35d7291577c7276d12965",
    measurementId: "G-N5D0L2ST2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
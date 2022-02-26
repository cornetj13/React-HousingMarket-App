// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6aetwNR87UxXWXG2rtmP_6KcewLrcZ14",
    authDomain: "house-marketplace-app-fe3f4.firebaseapp.com",
    projectId: "house-marketplace-app-fe3f4",
    storageBucket: "house-marketplace-app-fe3f4.appspot.com",
    messagingSenderId: "171344878085",
    appId: "1:171344878085:web:90020c8d5a4fafe4531a6c"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
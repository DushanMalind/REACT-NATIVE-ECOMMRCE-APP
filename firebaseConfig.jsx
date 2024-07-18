// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzA79rbYZB8gDlcQnWIE7vi4YUIoRwPkM",
    authDomain: "home-market-905fe.firebaseapp.com",
    projectId: "home-market-905fe",
    storageBucket: "home-market-905fe.appspot.com",
    messagingSenderId: "885025211383",
    appId: "1:885025211383:web:15074c1f26a688470ce4f2",
    measurementId: "G-50K1BMVH60"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

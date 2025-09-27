// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDlNez5LzN57WlTzMd7Mpq-7orFwcet2vM",
	authDomain: "sistemas-de-internet.firebaseapp.com",
	projectId: "sistemas-de-internet",
	storageBucket: "sistemas-de-internet.firebasestorage.app",
	messagingSenderId: "371439359797",
	appId: "1:371439359797:web:54cca9fc909e41775f9e7c",
	measurementId: "G-HQLBENLCBK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

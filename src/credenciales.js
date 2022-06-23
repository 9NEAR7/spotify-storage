// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuHEwOf6DMjjgIYuqMkX2LG_FfqpmRds4",
  authDomain: "spotify-storage.firebaseapp.com",
  projectId: "spotify-storage",
  storageBucket: "spotify-storage.appspot.com",
  messagingSenderId: "265445827247",
  appId: "1:265445827247:web:c635fac2f84cd7d39e6a5a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
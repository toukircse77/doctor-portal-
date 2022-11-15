// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXy5cU-3JWsT_s865k9PvOIpA4K-llVx8",
  authDomain: "doctors-portal-6bea2.firebaseapp.com",
  projectId: "doctors-portal-6bea2",
  storageBucket: "doctors-portal-6bea2.appspot.com",
  messagingSenderId: "334052236121",
  appId: "1:334052236121:web:2a00b823ebe62aa8b6ca48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
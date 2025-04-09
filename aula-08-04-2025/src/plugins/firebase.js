// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVRRZBGjDawUVfl_bN-9F5115hj-V5Lhg",
  authDomain: "aula5-fmds.firebaseapp.com",
  projectId: "aula5-fmds",
  storageBucket: "aula5-fmds.firebasestorage.app",
  messagingSenderId: "743297259231",
  appId: "1:743297259231:web:850c966408fc2cff5d3b6a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
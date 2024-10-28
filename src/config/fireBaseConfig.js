// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJWsXZuohBeppW9f7SA6CpThuE8dxRpro",
  authDomain: "test-bcfc0.firebaseapp.com",
  projectId: "test-bcfc0",
  storageBucket: "test-bcfc0.appspot.com",
  messagingSenderId: "328726994971",
  appId: "1:328726994971:web:37e689f5da1ab2a2bd98be",
  measurementId: "G-SYY1F8TEBB"
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

  export {
    storage, firebase as default
  }
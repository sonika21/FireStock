import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhn2razwYg3_mh_LpBF-KcnOtepptXRjs",
  authDomain: "firestock-deece.firebaseapp.com",
  projectId: "firestock-deece",
  storageBucket: "firestock-deece.appspot.com",
  messagingSenderId: "420177688883",
  appId: "1:420177688883:web:29f13ffc62e8147fe92646",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

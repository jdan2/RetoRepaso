import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

   const firebaseConfig = {
    apiKey: "AIzaSyAn8cFtR98AqFtVWvthWzqzSHURWlw60VA",
    authDomain: "estacionamientojds.firebaseapp.com",
    projectId: "estacionamientojds",
    storageBucket: "estacionamientojds.appspot.com",
    messagingSenderId: "378894086179",
    appId: "1:378894086179:web:fad3887dcf22f79c3f8196",
    measurementId: "G-XPMX6MFJRB"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth;
  export const firestore = firebase.firestore;
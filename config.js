import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBgaGMmRSZRrkav9SdNr30lOSPgzD07rys",
    authDomain: "main-3e452.firebaseapp.com",
    databaseURL: "https://main-3e452-default-rtdb.firebaseio.com",
    projectId: "main-3e452",
    storageBucket: "main-3e452.appspot.com",
    messagingSenderId: "783953146203",
    appId: "1:783953146203:web:0feefc4a667f69f4c16a7e",
    measurementId: "G-RYJEN7H7H7"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

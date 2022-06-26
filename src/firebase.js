// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD2dZatQop0_yHBSwfVR3VK6oPcSh9u2xM",
    authDomain: "challenge-5e25f.firebaseapp.com",
    projectId: "challenge-5e25f",
    storageBucket: "challenge-5e25f.appspot.com",
    messagingSenderId: "553751165956",
    appId: "1:553751165956:web:e45a142657ce7bac0c4951",
    measurementId: "G-QMW12Y0B1Y"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};
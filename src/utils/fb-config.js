import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyClbrh9F_XDGjQzEGl7Bw8Ksy7Jsyc059k",
    authDomain: "cuisine-f3c62.firebaseapp.com",
    databaseURL: "https://cuisine-f3c62-default-rtdb.firebaseio.com",
    projectId: "cuisine-f3c62",
    storageBucket: "cuisine-f3c62.appspot.com",
    messagingSenderId: "1013046022851",
    appId: "1:1013046022851:web:e474c9b5898f5118290876",
    measurementId: "G-7H4K7FH8DW"
  };
 
firebase.initializeApp(firebaseConfig);

export default firebase;

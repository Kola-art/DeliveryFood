import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBMfw9khcAlYGMpfWwmc8pyxXl98imumKo",
    authDomain: "restaurants-60826.firebaseapp.com",
    databaseURL: "https://restaurants-60826-default-rtdb.firebaseio.com",
    projectId: "restaurants-60826",
    storageBucket: "restaurants-60826.appspot.com",
    messagingSenderId: "394552474624",
    appId: "1:394552474624:web:f4b93a6299dab64f59ece5",
    measurementId: "G-Q3VM862W36"
  };
 
firebase.initializeApp(firebaseConfig);

export default firebase;
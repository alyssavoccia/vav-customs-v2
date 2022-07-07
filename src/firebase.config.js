import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDBPtroV0ZXTu2kIVtUIhCkOZU9uwxm7XQ",
  authDomain: "vavcustoms-e3273.firebaseapp.com",
  projectId: "vavcustoms-e3273",
  storageBucket: "vavcustoms-e3273.appspot.com",
  messagingSenderId: "573062538765",
  appId: "1:573062538765:web:a6e7a5aca100229afc9744",
  measurementId: "G-F6K1B9PX16"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
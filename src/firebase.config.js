import firebase from 'firebase/compat/app';
import { getStorage } from 'firebase/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWMYE7K8eSzkFKfUwdmaiRhCswLHLJKHE",
  authDomain: "vav-customs.firebaseapp.com",
  projectId: "vav-customs",
  storageBucket: "vav-customs.appspot.com",
  messagingSenderId: "764757673702",
  appId: "1:764757673702:web:34f7798cf6aac964c01d27",
  measurementId: "G-74S7ZNH3FL"
};

firebase.initializeApp(firebaseConfig);
export const storage = getStorage();
export const db = firebase.firestore();
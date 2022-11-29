// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpwD7IpvdsAc7NgvD6SJP-msFOcetly_I',
  authDomain: 'crud-41841.firebaseapp.com',
  projectId: 'crud-41841',
  storageBucket: 'crud-41841.appspot.com',
  messagingSenderId: '916135885687',
  appId: '1:916135885687:web:d8d5509368453006743f72',
  measurementId: 'G-Y99EZ00600',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
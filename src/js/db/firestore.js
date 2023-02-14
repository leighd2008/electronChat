import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEdSs6I4lkzNGA1SXbA5qXsYNzD3RTvPU",
  authDomain: "electron-chat-ca6f3.firebaseapp.com",
  projectId: "electron-chat-ca6f3",
  storageBucket: "electron-chat-ca6f3.appspot.com",
  messagingSenderId: "770733950984",
  appId: "1:770733950984:web:6330b339f43616e7bba9bd",
  measurementId: "G-0P2HFEPGNM"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig).firestore();
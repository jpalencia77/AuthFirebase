import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC5Vb3B1uu3u1dicYIQ5G5YLkeV1nC9WYo",
  authDomain: "optativajaime1.firebaseapp.com",
  projectId: "optativajaime1",
  storageBucket: "optativajaime1.appspot.com",
  messagingSenderId: "375922188693",
  appId: "1:375922188693:web:722917f08dc5349378d69c",
  measurementId: "G-TRJNJ5HCGS"
};


console.log(Constants.manifest);

let Firebase;

if (firebase.apps.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
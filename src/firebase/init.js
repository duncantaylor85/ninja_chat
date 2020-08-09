import firebase from "firebase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA2e5CiGpURDemdMAHlZDxUOuVSrZmgDGY",
  authDomain: "ninja-chat-1234.firebaseapp.com",
  databaseURL: "https://ninja-chat-1234.firebaseio.com",
  projectId: "ninja-chat-1234",
  storageBucket: "ninja-chat-1234.appspot.com",
  messagingSenderId: "674139905046",
  appId: "1:674139905046:web:d8870b35914e8348582937",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();

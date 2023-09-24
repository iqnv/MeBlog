import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNE3Rdrb11IA2J1y5GC04lSJn60B5T7As",
    authDomain: "meblog-a85ed.firebaseapp.com",
    projectId: "meblog-a85ed",
    storageBucket: "meblog-a85ed.appspot.com",
    messagingSenderId: "211226140893",
    appId: "1:211226140893:web:9b194a3132735f7217fb34"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();
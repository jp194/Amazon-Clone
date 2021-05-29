import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDZxEMHg86Se6LS1-5DKRsHbN5kDQhsMUw",
  authDomain: "clone-29bcb.firebaseapp.com",
  projectId: "clone-29bcb",
  storageBucket: "clone-29bcb.appspot.com",
  messagingSenderId: "943400218417",
  appId: "1:943400218417:web:7658ad9efbea28b9398a10",
  measurementId: "G-3C82R8B4V6"
});




const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
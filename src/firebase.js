import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyChLS-9eYHhAYreoGJAhIHdGyUK73LgvTk",
  authDomain: "tndr-app.firebaseapp.com",
  projectId: "tndr-app",
  storageBucket: "tndr-app.appspot.com",
  messagingSenderId: "236867895695",
  appId: "1:236867895695:web:f1be7e09be086894518bfa",
  measurementId: "G-J3KYH0RFQR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
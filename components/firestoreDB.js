import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeQj8YIOe-Ebg0ZNZTiKYNQRPmQPEGlE4",
  authDomain: "convergent-health.firebaseapp.com",
  databaseURL: "https://convergent-health-default-rtdb.firebaseio.com",
  projectId: "convergent-health",
  storageBucket: "convergent-health.appspot.com",
  messagingSenderId: "791844457283",
  appId: "1:791844457283:web:454fe40c9cacfa0977bdf6",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;

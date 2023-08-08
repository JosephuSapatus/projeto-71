import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBHgmrONwkN0O4HnL6V7ykdJOh0MQOP9-Q",
  authDomain: "bicicreta-c3f7a.firebaseapp.com",
  projectId: "bicicreta-c3f7a",
  storageBucket: "bicicreta-c3f7a.appspot.com",
  messagingSenderId: "659039902377",
  appId: "1:659039902377:web:3291ace6b5b1feb82ca7b8"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

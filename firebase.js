import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLHN1GFe2HCFSlHEev0cO6HfZ503JXlP4",
  authDomain: "signal-44f01.firebaseapp.com",
  projectId: "signal-44f01",
  storageBucket: "signal-44f01.appspot.com",
  messagingSenderId: "364592713857",
  appId: "1:364592713857:web:99987b986923fb2fd4fd80",
};

// only initialise app if it hasn't been initialised yet
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// set up db access variable
const db = app.firestore();

// set up firebase authentication variable
const auth = firebase.auth();

export { db, auth };

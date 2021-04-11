import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBh9395k1aIqnvklMBVHoiDUC5pFWZVvtA",
    authDomain: "foodland-9c588.firebaseapp.com",
    projectId: "foodland-9c588",
    storageBucket: "foodland-9c588.appspot.com",
    messagingSenderId: "773992144414",
    appId: "1:773992144414:web:e41f50f48676e1920a580f",
    measurementId: "G-HRHHYE951M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChU-gsoPJQDfZ2GCJmQTiBMEdcLmsSnbA",
    authDomain: "vusic-music.firebaseapp.com",
    projectId: "vusic-music",
    storageBucket: "vusic-music.appspot.com",
    messagingSenderId: "86874963144",
    appId: "1:86874963144:web:51cb436437abb089bfb9fd",
    measurementId: "G-ESVL7K7CNK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const authentication = firebaseApp.auth();

export { database, authentication };

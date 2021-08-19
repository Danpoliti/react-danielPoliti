import firebase from 'firebase/app'
import 'firebase/firestore'



// Your web app's Firebase configuration
var firebaseConfig = {

    apiKey: "AIzaSyBS1jyIaEZwK0A5VTozyNNjzaEjuzCLdeY",
    authDomain: "politi-d6727.firebaseapp.com",
    projectId: "politi-d6727",
    storageBucket: "politi-d6727.appspot.com",
    messagingSenderId: "746622181005",
    appId: "1:746622181005:web:3c2befa94ca1912c094cc4"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)



export default firebase

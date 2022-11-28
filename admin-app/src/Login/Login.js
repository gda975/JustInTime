import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

const firebaseConfig = {
    apiKey: 'AIzaSyA41mHLaNc1C9Cw-B07AYVuI_rh8f3Cx7g',
    authDomain: 'just-in-time-5698c.firebaseapp.com',
    databaseURL: 'https://just-in-time-5698c-default-rtdb.firebaseio.com',
    projectId: 'just-in-time-5698c',
    storageBucket: 'just-in-time-5698c.appspot.com',
    messagingSenderId: '162813204267',
    appId: '1:162813204267:web:0234c4cc89dbfe1a61976e',
    measurementId: 'G-QQ6S8Z137D',
    databaseURL: 'https://just-in-time-5698c-default-rtdb.firebaseio.com',
};

var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // Other Config
  };

// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
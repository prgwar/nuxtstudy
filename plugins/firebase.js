import firebase from 'firebase/app'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyCXGkdFzdqkuvpxdSS-zbNo9nNYB0mJKL0",
    authDomain: "nuxt-login-fb883.firebaseapp.com",
    projectId: "nuxt-login-fb883",
    storageBucket: "nuxt-login-fb883.appspot.com",
    messagingSenderId: "538692629939",
    appId: "1:538692629939:web:356265a10096aa8f3bc7c6"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

  //let app = null;
  var app = null;
  if(!firebase.apps.length)
  {
      app = firebase.initializeApp(firebaseConfig);
  }

  export default firebase
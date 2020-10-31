import * as firebase from 'firebase'
import 'firebase/database' //we tell which service we are using like in js
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBOkhUIy-KXMvzffqPQ6UpTR9zCu5WAI5I",
    authDomain: "olx-web-by-faizan.firebaseapp.com",
    databaseURL: "https://olx-web-by-faizan.firebaseio.com",
    projectId: "olx-web-by-faizan",
    storageBucket: "olx-web-by-faizan.appspot.com",
    messagingSenderId: "143742488231",
    appId: "1:143742488231:web:35f49bbf5f02bddee69582",
    measurementId: "G-3Y6QHCV0MP"
  };
  // Initialize Firebase
  var Firebase=firebase.initializeApp(firebaseConfig); 
  export default Firebase; //explicitly add export default
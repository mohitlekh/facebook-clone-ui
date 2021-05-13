import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAAc5PvpITvw42DUyIOU-4HJw1nZaRXF8s",
    authDomain: "facebook-clone-ec9cc.firebaseapp.com",
    projectId: "facebook-clone-ec9cc",
    storageBucket: "facebook-clone-ec9cc.appspot.com",
    messagingSenderId: "535392996470",
    appId: "1:535392996470:web:22012199c88d0ab379e357"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
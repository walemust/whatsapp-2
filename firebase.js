import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDu5aTqr6Iy9HftcpNjUc4ofQhPNNPswaY",
    authDomain: "whatsapp-2-52884.firebaseapp.com",
    projectId: "whatsapp-2-52884",
    storageBucket: "whatsapp-2-52884.appspot.com",
    messagingSenderId: "214755756450",
    appId: "1:214755756450:web:effabb688a089a87494afb"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig) 
  : firebase.app();

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };
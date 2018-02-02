import firebase from 'firebase';

try {
  // Initialize Firebase DB
    var config = {
      apiKey: "AIzaSyDFCAU8DlU2ZstCMjneqTiTSuxyC9vnTk4",
      authDomain: "bmw-todo-app.firebaseapp.com",
      databaseURL: "https://bmw-todo-app.firebaseio.com",
      projectId: "bmw-todo-app",
      storageBucket: "bmw-todo-app.appspot.com",
      messagingSenderId: "746386111976"
    };
    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;

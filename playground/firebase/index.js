import firebase from 'firebase';

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

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
    app: {
      name: 'Default name',
      version: '1.0.0'
    },
    isRunning: true,
    user: {
      name: 'Bruce',
      age: 56
    }
  }).then (() => {
    console.log('Set worked!');
  }, (e) => {
    console.log ('Set did not work!');
  })

  // firebaseRef.set ({
  //   appName: "Changed App Name"
  // });

  firebaseRef.child('app').set ({
    name: 'Todo App Name',
    version: '1.0.1'

  });

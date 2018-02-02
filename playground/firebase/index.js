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
  });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo Added', snapshot.key, snapshot.val());
});

todosRef.push({
  text: 'Walk the dog!'
});
//console.log('ID', todoRef.key);

todosRef.push({
  text: 'Transfer funds!'
});
//console.log('ID', todoRef.key);


// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child Removed', snapshot.key, snapshot.val());
// });

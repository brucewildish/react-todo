var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

// old way of pulling todo collection from local storage
// store.subscribe(() => {
//     // Log every time state changes for tracing purposes
//     var state = store.getState();
//     console.log('New state', state);
//     TodoAPI.setTodos(state.todos);
// });

// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

// new way pulls todo collection from firebaseDB
store.dispatch(actions.startAddTodos());

// Load foundation for styles
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
      <TodoApp/>
  </Provider>,

  document.getElementById('app')
);

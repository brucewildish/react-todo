import * as redux from 'redux';
import thunk from 'redux-thunk';

// Addedd Feb 6 to solve Redux dev tools issues
// https://github.com/zalmoxisus/redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension';

import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText:searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
  });

  // These two worked for basic actions that return objects
  // var store = redux.createStore(reducer, redux.compose (
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // ));

  // var store = redux.createStore(reducer, initialState,
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // );

  // New version added thunk to enable actions to return functions
  // var store = redux.createStore(reducer, initialState,
  //   redux.applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // );

  // This one added Reb 6 2018 for npm dev tools imported above
  var store = redux.createStore(reducer, initialState,
    composeWithDevTools(redux.applyMiddleware(thunk))
  );

  return store;
};

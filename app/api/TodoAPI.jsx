var $ = require('jquery');

module.exports = {
//   setTodos: function (todos) {
//       if ($.isArray(todos)) {
//           localStorage.setItem('todos', JSON.stringify(todos));
//           return todos;
//       }
//   },
//   getTodos: function () {
//     var stringTodos = localStorage.getItem('todos');
//     var todos = [];
//     try {
//       todos = JSON.parse(stringTodos);
//     } catch (e) {
//
//     }
//
//     return $.isArray(todos) ? todos : [];
//   },

  filterTodos: function (todos, showCompleted, searchText) {
    var filteredTodos = todos;

    // filter by showCompleted: show each todo if it is not completed;
    // but if showCompelted is true show completed todos as well (so
    // list shows all incomplete todos and only shows the completed
    // ones as well whne the show compelte option is checked)
     filteredTodos = filteredTodos.filter((todo) => {
       return !todo.completed || showCompleted;
     });
    //
    // filter by SearchTest (tbx in control sets to lower case)
    filteredTodos = filteredTodos.filter((todo) => {
      // My fix: when todo is underfined was getting wierd errors
        //var text = todo.text.toLowerCase();
        var text = todo.text != null ? todo.text.toLowerCase() : ''
        return searchText.length === 0 || text.indexOf(searchText) > -1;
    });
    //
    // Sort todos with non-completed items first
    filteredTodos.sort((a,b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};

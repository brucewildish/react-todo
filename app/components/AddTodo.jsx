var React = require('react');

var AddTodo = React.createClass({
  handleOnSubmit: function (e) {
    e.preventDefault();
    var todotext = this.refs.todoText.value;
    if (todotext.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todotext);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;

import React from 'react'
import Todo from './Todo'

class Todos extends React.Component {
  render() {
    var rows = [];
    var todos = this.props.todos.filter(function(todo) {
      switch (this.props.filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed;
      default:
        return true;
      }
    }, this);

    todos.map(function(todo) {
      if (this.props.editing.id == todo.id) {
        rows.push(<Todo key={todo.id} todo={todo} editing={this.props.editing} />);
      } else {
        rows.push(<Todo key={todo.id} todo={todo} />);
      }
    }, this);

    return (
      <ul className="todo-list">
        {rows}
      </ul>
    )
  }
}

export default Todos;

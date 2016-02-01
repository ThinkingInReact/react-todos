import React from 'react';
import cx from 'classnames';

class Todo extends React.Component {
  render() {
    let editField;
    if (this.props.editing) {
      editField = <input ref="editField"
                         className="edit"
                         value={this.props.editing.text}
                         />;
    }
    return (
      <li className={cx({
        completed: this.props.todo.completed,
        editing:   this.props.editing
      })}>
        <div className="view">
          <input
            ref="toggle"
            className="toggle"
            type="checkbox"
            checked={this.props.todo.completed}
          />
          <label>
            {this.props.todo.text}
          </label>
          <button className="destroy" />
        </div>
        {editField}
      </li>
    );
  }
}

export default Todo;

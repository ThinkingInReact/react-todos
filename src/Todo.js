import React from 'react';
import cx from 'classnames';

class Todo extends React.Component {
  toggle(event) {
    this.props.dispatch({type: 'COMPLETE_TODO', id: this.props.todo.id});
  }

  showEditField(event) {
    this.props.dispatch({type: 'START_EDITING_TODO', id: this.props.todo.id, text: this.props.todo.text});
  }

  updateEditingText(event) {
    this.props.dispatch({type: 'UPDATE_EDITING_TEXT', id: this.props.todo.id, text: event.target.value});
  }

  stopEditingTodo(event) {
    this.props.dispatch({type: 'STOP_EDITING_TODO', id: this.props.todo.id, text: event.target.value});
  }

  handleKeyDown(event) {
    if (event.which === 27) {
      this.updateEditingText(event);
    } else if (event.which === 13) {
      this.stopEditingTodo(event);
    }
  }

  destroyTodo(event) {
    this.props.dispatch({type: 'DELETE_TODO', id: this.props.todo.id});
  }

  render() {
    let editField;
    if (this.props.editing) {
      editField = <input ref="editField"
                         className="edit"
                         value={this.props.editing.text}
                         onChange={this.updateEditingText.bind(this)}
                         onKeyDown={this.handleKeyDown.bind(this)}
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
            onChange={this.toggle.bind(this)}
          />
          <label onDoubleClick={this.showEditField.bind(this)}>
            {this.props.todo.text}
          </label>
          <button className="destroy" onClick={this.destroyTodo.bind(this)} />
        </div>
        {editField}
      </li>
    );
  }
}

export default Todo;

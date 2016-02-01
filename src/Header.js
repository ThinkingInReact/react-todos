import React from 'react'

class Header extends React.Component {
  handleNewFieldKeyDown(event) {
    // Check for enter key
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();

    this.props.dispatch({type: 'ADD_TODO', text: event.target.value});
  }

  render () {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          ref="newField"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onKeyDown={this.handleNewFieldKeyDown.bind(this)}
        />
      </header>
    )
  }
}

export default Header;

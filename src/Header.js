import React from 'react'

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          ref="newField"
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
        />
      </header>
    )
  }
}

export default Header;

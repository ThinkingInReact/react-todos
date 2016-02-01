import React from 'react';
import cx from 'classnames';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> todos left
        </span>
        <ul className="filters">
          <li><a href="#/" className={cx({selected: this.props.filter == null})}>All</a></li>
          {' '}
          <li><a href="#/active" className={cx({selected: this.props.filter == "active"})}>Active</a></li>
          {' '}
          <li><a href="#/completed" className={cx({selected: this.props.filter == "completed"})}>Completed</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

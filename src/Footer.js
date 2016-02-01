import React from 'react';
import cx from 'classnames';

class Footer extends React.Component {
  filterAll(event) {
    event.preventDefault();
    this.props.dispatch({type: "CHANGE_FILTER", filter: "all"});
  }

  filterActive(event) {
    event.preventDefault();
    this.props.dispatch({type: "CHANGE_FILTER", filter: "active"});
  }

  filterCompleted(event) {
    event.preventDefault();
    this.props.dispatch({type: "CHANGE_FILTER", filter: "completed"});
  }

  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{this.props.count}</strong> todos left
        </span>
        <ul className="filters">
          <li><a href="#/" onClick={this.filterAll.bind(this)} className={cx({selected: this.props.filter == null})}>All</a></li>
          {' '}
          <li><a href="#/active" onClick={this.filterActive.bind(this)} className={cx({selected: this.props.filter == "active"})}>Active</a></li>
          {' '}
          <li><a href="#/completed" onClick={this.filterCompleted.bind(this)} className={cx({selected: this.props.filter == "completed"})}>Completed</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;

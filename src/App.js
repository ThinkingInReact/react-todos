import './styles/App.css'
import React from 'react'
import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'

class App extends React.Component {
  completeAll(event) {
    this.props.dispatch({type: 'COMPLETE_ALL'});
  }

  render() {
    return (
      <div className="todoapp">
        <Header {...this.props} />
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={this.completeAll.bind(this)}
          />
        <Todos {...this.props} />
        </section>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default App;

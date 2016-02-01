import './styles/App.css'
import React from 'react'
import Header from './Header'
import Todos from './Todos'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className="todoapp">
        <Header {...this.props} />
        <section className="main">
          <input
            className="toggle-all"
            type="checkbox"
          />
        <Todos {...this.props} />
        </section>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default App;

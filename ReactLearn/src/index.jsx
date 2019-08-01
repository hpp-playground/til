import React from 'react'
import { render } from 'react-dom'
import UserCard from './UserCard';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: 'something' }
  }

  onChange(e) {
     this.setState( {message: e.target.value} )
  }

  render() {
    return (
      <>
        <input type="text" onChange = { this.onChange.bind(this) } />
        <p>{ this.state.message }</p>
        <UserCard />
      </>
    )
  }
}

render(<App/>, document.getElementById('app'))
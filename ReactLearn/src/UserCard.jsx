import React, { Component } from 'react'

class UserCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    )
  }
}

export default UserCard
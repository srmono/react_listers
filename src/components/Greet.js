import React, { Component } from 'react'

class Greet extends Component {
  render() {
    const {name} = this.props;
    return (
      <div>Greet {name}</div>
    )
  }
}

export default Greet
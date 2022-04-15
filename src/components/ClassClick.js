import React, { Component } from 'react'

class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
      //this.ClickHandler = this.ClickHandler.bind(this);
    }

    // ClickHandler(){
    //     this.setState({
    //         message: "Welcome to Criodo.com"
    //     })
    //     console.log(this)
    // }

    ClickHandler = () => {
        this.setState({
            message: "Welcome to Criodo.com"
        })
    }
  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={ this.ClickHandler.bind(this) }>Click</button> */}
          {/* <button onClick={ () => this.ClickHandler() }>Click</button> */}
          {/* <button onClick={ this.ClickHandler }>Click</button> */}

          <button onClick={ this.ClickHandler }>Click</button>
      </div>
    )
  }
}

export default ClassClick
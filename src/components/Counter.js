import React, { Component } from 'react'

class Counter extends Component {

    //rconst
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        //this.state.count = this.state.count + 1;

        this.setState((prevState) => ({
            count: prevState.count + 1
        }))

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log(this.state.count)})

        //console.log(this.state.count)
    }

    incrementThree(){
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
          <div>Counter -  {this.state.count} </div>
          <button onClick={() => this.increment()}>Increment</button>
          <button onClick={() => this.incrementThree()}>Increment 3 Times</button>
      </div>
    )
  }
}

export default Counter
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Criodo.com"
      }
      console.log("LifeCycleA in side the constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleA in side the getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA in side the shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleA in side the getSnapshotBeforeUpdate");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA in side the componentDidMount");
    }

    componentDidUpdate(){
        console.log("LifeCycleA in side the componentDidUpdate");
    }
    changeState = () => {
        this.setState({
            name: "Welcome to Crio Platform"
        })
    }

  render() {
    console.log("LifeCycleA in side the render")
    return (
      <div>
          LifeCycleA
          {this.state.name}
          <button onClick={this.changeState}>Change State</button>
          <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
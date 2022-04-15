import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      console.log("LifeCycleB in side the constructor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB in side the getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB in side the shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifeCycleB in side the getSnapshotBeforeUpdate");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB in side the componentDidMount");
    }

    componentDidUpdate(){
        console.log("LifeCycleB in side the componentDidUpdate");
    }


  render() {
    console.log("LifeCycleB in side the render")
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB
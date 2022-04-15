import React, { Component } from 'react'

class WelcomeUser extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {

    return this.state.isLoggedIn && <div>Wlecome to Venkat</div>

    // return(
    //     this.state.isLoggedIn ? 
    //         (<div>Wlecome to Venkat</div>) :
    //         (<div>Wlecome to Guest</div>)
    // )

    // let message; 
    // if(this.state.isLoggedIn){
    //     message = <div>Wlecome to Venkat</div>
    // } else {
    //     message = <div>Wlecome to Guest</div>
    // }
    // return <div>{message}</div>
    
    //   if(this.state.isLoggedIn){
    //       return <div>Wlecome to Venkat</div>
    //   } else {
    //       return <div>Wlecome to Guest</div>
    //   }
  }
}

export default WelcomeUser
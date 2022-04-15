import React from 'react'

function Welcome(props) {
    //console.log(props)

    const {name, job} = props;
  return (
    <div>
        <div>Welcome to {name} your job is {job}</div>
        {props.children}
    </div>
  )
}

//const Welcome = () => <h1>Welcome to Venkat</h1>

export default Welcome
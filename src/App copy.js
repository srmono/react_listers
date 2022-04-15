import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import Posts from './components/Posts';
import WelcomeUser from './components/WelcomeUser';
import UsersList from './components/UsersList';

class App extends Component{

  render(){
    return (
      <div className='App'>

        <UsersList />

        {/* <WelcomeUser /> */}
        {/* <Posts /> */}
        {/* <LifeCycleA /> */}

        {/* <Form /> */}

        {/* <ClassClick /> */}
        {/* <FunctionClick /> */}
        {/* <Counter /> */}
        {/* <Message /> */}
       {/* <Welcome name="Venkat" job="Training">
         <p> Some data as a child elements from parent</p>
       </Welcome>
       <Welcome name="Vasu" job="Development"></Welcome>
       <Welcome name="Gayatri" job="Testing"></Welcome>

       <Greet name="Sujith" /> */}
      </div>
    )
  }
}


export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Components/Venue';
import './Components/Table';
import User from './Components/User';
import GetUser from './UseCases/GetUser';
import PutUser from './UseCases/PutUser';
import CreateUser from './UseCases/CreateUser';

const getUserGateway = new GetUser();
const putUser = new PutUser();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
            <User getUser = {getUserGateway}></User>
            <CreateUser onSubmit={putUser.putUser}></CreateUser>
      </div>
    );
  }
}

export default App;

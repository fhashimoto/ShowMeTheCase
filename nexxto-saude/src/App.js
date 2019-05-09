import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import NavBar from './View/NavBar';
import Home from './View/Home';


class App extends Component {
  render(){
    return (
      <div>
        <NavBar/>
        <Home/>
      </div>
    );
  }
}

export default App;

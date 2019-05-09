import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import NavBar from './View/NavBar';
import Adicionar from './View/Adicionar';
import Sensores from './View/Sensores';


class App extends Component {
  render(){
    return (
      <div>
        <NavBar/>
        {window.localStorage.length>0 ? (
          <div>
            <div className="container">MENSAGEM</div>
            <div className='container'><Sensores/></div>
          </div>
        ) : null
        }
        <Adicionar/>
      </div>
    );
  }
}

export default App;

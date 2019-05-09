import React, {Component} from 'react';
import './App.css';
// eslint-disable-next-line
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import NavBar from './View/NavBar';
import Adicionar from './Controller/Adicionar';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cont: false
    }
  }
  atualizar(){
    this.setState({cont: this.state.cont +1})
  }
  render(){
    return (
      <div>
        <NavBar/>
        {window.localStorage.length>0 ? (
          <div>
            <div className="container">MENSAGEM</div>
            <div className='container'>Sensores</div>
          </div>
        ) : null
        }
        <Adicionar atualizar={this.atualizar.bind(this)}/>
      </div>
    );
  }
}

export default App;

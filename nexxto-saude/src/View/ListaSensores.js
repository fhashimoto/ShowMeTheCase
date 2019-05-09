import React, { Component } from 'react';
import api from '../simulandoAPI.json';

class ListaSensores extends Component {
  criarLista = () => {
    let lista = [],
    keys = Object.keys(localStorage);

    for (let i = 0; i < keys.length; i++) {
      let item = JSON.parse(localStorage.getItem(keys[i]));
      let atual = [];
      (api.sensores).forEach(element => {
        if(element.id == item.id){
          atual.push (
            <div>
              <li>T. Atual: {element.temperatura}</li>
              <li>U. Atual: {element.umidade}</li>
              <li>Bateria: {element.bateria}</li>
            </div>
          ) 
        }
      });
      
      lista.push (
        <ul> ID: {keys[i]}
          <li>Local: {item.name}</li>
          <li>T. Máx: {item.tmax}</li>
          <li>T. Mín: {item.tmin}</li>
          <li>U. Máx: {item.umax}</li>
          <li>U. Mínima: {item.umin}</li>
          {atual}
        </ul>);
    }
    return lista;
  }
  render() {
    return (
      <div>
        {this.criarLista()}
      </div>
    );
  }
}

export default ListaSensores;
import React, { Component } from 'react';

class Sensores extends Component {
  createSensores = () => {
    let sensores = [],
    keys = Object.keys(localStorage),
    i = keys.length,
    final = [];

    while ( i-- ) {
      sensores[ keys[i] ] = localStorage.getItem( keys[i] );
    }
    console.log(JSON.parse(sensores[keys[1]]).name);
    for (let j = 0; j < keys.length; j++) {
      let json = JSON.parse(sensores[keys[j]]);
      console.log(json);
      final.push(JSON.stringify(json));
    }
    return final
  }
  render() {    
    
    return (
      <div>
        Sensores{this.createSensores()}
      </div>
    );
  }
}

export default Sensores;
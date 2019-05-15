import React, { Component } from 'react';

import {Link} from 'react-router-dom'

class Home extends Component {
  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div>
        Features:
        <Link to='/features/lista'>
          <button>Lista medicamentos por validade</button>
        </Link>
        <Link to='/features/mapa'>
          <button>Rastreamento medicamentos</button>
        </Link>
      </div>
    );
  }
}

export default Home;
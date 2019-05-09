import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Nexxto</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Relatório</a>
            <a className="nav-item nav-link" href="#">Sensores</a>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar;
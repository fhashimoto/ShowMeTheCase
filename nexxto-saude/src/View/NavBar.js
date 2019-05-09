import React, { Component } from 'react';

class NavBar extends Component {
  render(){
    const style={cursor:"pointer"}
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      {/* eslint-disable-next-line */}
        <a className="navbar-brand" href="#">Nexxto</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="nav-item nav-link" style={style}>Home <span class="sr-only">(current)</span></div>
            <div className="nav-item nav-link" style={style}>Relatório</div>
            <div className="nav-item nav-link" style={style}>Sensores</div>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar;
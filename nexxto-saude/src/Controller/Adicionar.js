import React, { Component } from 'react';
import $ from 'jquery';
import Form from '../View/Form';

class Adicionar extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      tmax: '',
      tmin: '',
      umax: '',
      umin: ''
    }
    this.handleSave = this.handleSave.bind(this);
    this.id = this.id.bind(this);
    this.name = this.name.bind(this);   
    this.tMax = this.tMax.bind(this);
    this.tMin = this.tMin.bind(this);
    this.uMax = this.uMax.bind(this);
    this.uMin = this.uMin.bind(this); 
  }

  id(e){this.setState({id:e.target.value})};
  name(e){this.setState({name:e.target.value})};
  tMax(e){this.setState({tmax:e.target.value})};
  tMin(e){this.setState({tmin:e.target.value})};
  uMax(e){this.setState({umax:e.target.value})};
  uMin(e){this.setState({umin:e.target.value})};

  handleSave(){
    window.localStorage.setItem( $("#id").val() , JSON.stringify(this.state));
    this.setState({
      id:'',
      name:'',
      tmax: '',
      tmin: '',
      umax: '',
      umin: ''
    }, ()=>alert("Dados Salvos"));
    $(":input").val('');
    this.props.atualizar();
  }
  render() {
    return (
      <div>
        <Form saveid={this.id} saveName={this.name} savetMax={this.tMax} savetMin={this.tMin} saveuMax={this.uMax} saveuMin={this.uMin} save={this.handleSave}/>
      </div>
    );
  }
}

export default Adicionar;
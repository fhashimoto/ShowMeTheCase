import React, { Component } from 'react';
import $ from 'jquery';

class Adicionar extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      tmax: '',
      tmin: '',
      umax: '',
      umin: ''
    }
    this.handleSave = this.handleSave.bind(this);
    this.name = this.name.bind(this);   
    this.tMax = this.tMax.bind(this);
    this.tMin = this.tMin.bind(this);
    this.uMax = this.uMax.bind(this);
    this.uMin = this.uMin.bind(this); 
  }

  name(e){this.setState({name:e.target.value})};
  tMax(e){this.setState({tmax:e.target.value})};
  tMin(e){this.setState({tmin:e.target.value})};
  uMax(e){this.setState({umax:e.target.value})};
  uMin(e){this.setState({umin:e.target.value})};

  handleSave(){
    window.localStorage.setItem( $("#id").val() , JSON.stringify(this.state));
    this.setState({
      name:'',
      tmax: '',
      tmin: '',
      umax: '',
      umin: ''
    }, ()=>alert("Dados Salvos"));
    $(":input").val('');
  }
  render() {
    return (
      <div>
        {/* Trigger the modal with a button */}
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Adicione um sensor</button>
        {/* Modal */}
        <div id="myModal" class="modal fade" role="dialog">
          <div class="modal-dialog">

            {/* Modal content */}
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <form>
                  <input type="text" placeholder="ID do sensor" id="id"/>
                  <input type="text" placeholder="Local instalação sensor" onChange={this.name}/>
                  <input type="number" placeholder="Temperatura máxima do sensor" onChange={this.tMax}/>
                  <input type="number" placeholder="Temperatura mínima do sensor" onChange={this.tMin}/>
                  <input type="number" placeholder="Umidade máxima do sensor" onChange={this.uMax}/>
                  <input type="number" placeholder="Umidade mínima do sensor" onChange={this.uMin}/>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal" onClick={this.handleSave}>Salvar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Final Modal */}
      </div>
    );
  }
}

export default Adicionar;
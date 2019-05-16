import React, { Component } from 'react';

class Form extends Component {
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
                  <input type="text" placeholder="ID do sensor" id="id" onChange={this.props.saveid}/>
                  <input type="text" placeholder="Local instalação sensor" onChange={this.props.saveName}/>
                  <input type="number" placeholder="Temperatura máxima do sensor" onChange={this.props.savetMax}/>
                  <input type="number" placeholder="Temperatura mínima do sensor" onChange={this.props.savetMin}/>
                  <input type="number" placeholder="Umidade máxima do sensor" onChange={this.props.saveuMax}/>
                  <input type="number" placeholder="Umidade mínima do sensor" onChange={this.props.saveuMin}/>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal" onClick={this.props.save}>Salvar</button>
              </div>
            </div>
          </div>
        </div>
        {/* Final Modal */}  
      </div>
    );
  }
}

export default Form;
import React, { Component } from 'react';
import XLSX from 'xlsx'

import './FeatureLista.css'

class FeatureLista extends Component {
  constructor(props){
    super(props);
    this.handleFile = this.handleFile.bind(this);
    this.state={
      listaData: []
    }
  }
  handleFile(file){
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = ({target:{result}}) => {
      const wb = XLSX.read(result,{type:rABS ? "binary" : "array"});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      let lista = data.map((item)=>{        
        let data = [item.Nome, new Date(item.Ano,item.Mes-1,item.Dia)];
        return data
      });
      let today = new Date();
      lista.forEach(element => {
        if(element[1]>today)
          element[2] = 'green';
        else
          element[2] = 'red';
      })
      lista = lista.sort(function(a,b){
        return a[1]-b[1];
      });           
      lista = lista.map(item => {
        return [ item[0], `${String(item[1].getDate()).padStart(2,'0')}-${String(item[1].getMonth()+1).padStart(2,'0')}-${item[1].getFullYear()}`, item[2]]})
        ;      
      this.setState({
        listaData: lista
      })
      
    };
    if (rABS)
      reader.readAsBinaryString(file);
    else
      reader.readAsArrayBuffer(file);
  }
  render(){
    return (
      <div>
        Exemplo de planilha: <img src='https://i.imgur.com/fmXHUdG.png' alt='exemplo planilha'/><br/>
        State:
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Medicamento</th>
                <th scope="col">Validade</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listaData.map((item,index)=>
              <tr key={index}>
                <th scope="row"><span className="dot" style={{backgroundColor:item[2]}}></span></th>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
              </tr>
              )}
            </tbody>
          </table>
        <DataInput handleFile={this.handleFile} />
      </div>
    )
  }
}

class DataInput extends Component {
  constructor(props){
    super(props);
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    const files = e.target.files;
    if (files && files[0])
      this.props.handleFile(files[0]);
  }
  render() {
    return (
      <div>
        <div className="text-center">
          <button type="button" className="btn btn-info" onClick={()=>this.fileInput.current.click()}>
            Importar planilha
          </button>
        </div>
        <input
          ref={this.fileInput}
          type="file"
          hidden
          accept={SheetJSFT}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
const SheetJSFT = [
  "xlsx",
  "xlsb",
  "xlsm",
  "xls",
  "xml",
  "csv",
  "txt",
  "ods",
  "fods",
  "uos",
  "sylk",
  "dif",
  "dbf",
  "prn",
  "qpw",
  "123",
  "wb*",
  "wq*",
  "html",
  "htm"
]
  .map(function(x) {
    return "." + x;
  })
  .join(",");

export default FeatureLista;
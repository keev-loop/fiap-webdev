import React, { Component } from 'react';


class Produto extends Component {
  constructor(props){
    super(props);
    this.deleta = this.deleta.bind(this);
  }

  deleta(){
    if(this.props.evtDeletar){
      this.props.evtDeletar(this.props.indice);
    }
  }

  render() {
    return (
      <tr>
        <td>{this.props.produto.nome}</td>
        <td>{this.props.produto.preco.toFixed(2)}</td>
        <td>{this.props.produto.quantidade.toFixed(2)}</td>
        <td>{(this.props.produto.preco * this.props.produto.quantidade).toFixed(2)}</td>
        <td><input type="button" value="deletar" onClick={this.deleta} /></td>
      </tr>
    );
  }
  
}


export default Produto;
import React, { Component } from 'react';


class Produto extends Component {
  constructor(props){
    super(props);
    this.referencia = React.createRef();
  }
  componentDidMount(){
    this.referencia.current.value = "Valor configurado via ref";
  }
  render() {
    return (
      <input type="text" ref={this.referencia} value="" />
    );
  }
}


export default Produto;
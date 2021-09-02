import React, { Component } from 'react';


class MeuComponente5 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return <div>
          <h2>{this.props.titulo}</h2>
              {this.props.children}
          </div>
    }
}


export default MeuComponente5;
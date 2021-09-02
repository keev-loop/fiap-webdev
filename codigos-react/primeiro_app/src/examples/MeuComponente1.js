import React, { Component } from 'react';


class MeuComponente1 extends Component {
    render(){
        let f = <a href="http://www.fiap.com.br">fiap</a>;
        return <div>
                <div>O link da {f}</div>
                <div>Outro link da {f}</div>
               </div>;
    }
}


export default MeuComponente1;
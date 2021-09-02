import React, { Component } from 'react';


class MeuComponente2 extends Component {
    constructor(props){
        super(props);
    }
    criaLink(nome, url){
        return <a href={url}>{nome}</a>;
    }
    render(){
        return <div>
            <div>{this.criaLink("Fiap", "http://fiap.com.br")}</div>
            <div>{this.criaLink("Google", "http://google.com.br")}</div>
               </div>;
    }
}


export default MeuComponente2;
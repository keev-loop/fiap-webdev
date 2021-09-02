import React, { Component } from 'react';


class MeuComponente3 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        let v = [1,2,3,4,5];
        let h = v.map( (valor, indice) => {
            return <li key={indice} >{valor}</li>
        });
        return <div>
            <div><ul>{h}</ul></div>
               </div>;
    }
}


export default MeuComponente3;
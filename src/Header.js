import React, { Component } from 'react';
import './Header.css';



export default class Header extends Component{
  render(){
    return (

    <header>

      <div className="titulo stiloLetras">Memoria</div>
      <div>
      <button className="reiniciar" onClick={this.props.resetearPartida}> Reiniciar</button>
      </div>
      <div className="intentos stiloLetras">
      Intentos: {this.props.numeroDeIntentos}
      </div>

    </header>
    );
  }
}

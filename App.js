import React, { Component } from 'react';
import logo from '..//public/favicon.ico';
import img from './imgiphone.png'
import './App.css';
import'./style.css';
class App extends Component {

  render() {
    const styleTitle={
      border:'solid 1px black' ,
      color :'red',
      
    }
    return (<div > 
    <h1 style={styleTitle}>My title</h1>
    <br/>
    <img src={img}/>
    <br/>
    <img src={logo}/>
    </div>     
        );
      }
}

export default App;

import React from 'react';
import './App.css';
import './Props.css';
import Products from './components/Products';
import Approuter from './config/router'



class App extends React.Component{
  render(){
    return(
     <Approuter/>
    )
  }
}

export default App;

import React, {useEffect,useState} from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import  Header from '../components/Header';
import  Footer from '../components/Footer';
import Home from '../components/Home';
import Products from '../components/Products';



class Approuter extends React.Component{ 
    
render(){
return(
<Router>                                      


      <Header/>

         <Route exact path="/" component={Home}/>
         <Route exact path="/Products" component={Products}/>
        
      <Footer/>  

</Router>
)
}
}

export default Approuter;
import React, { Component } from 'react'
import './App.css';

import Forms from "./Forms"
import Header from "./Header"
import Django from "./Django"
import Ram from "./Ram"
import Use from './Use';

import {BrowserRouter as Router, Switch,  Route } from "react-router-dom"; 



class App extends Component {
 
 






   render(){
      return (
         <div>

   
            <Router>
               <Header/>
               <Switch>
               <Route exact path="/"component={Forms}/>
                  <Route exact path="/ram"component={Ram}/>
                  <Route exact path="/use"component={Use}/>
                  </Switch>
   </Router>






        
 
           
         </div>
      );
   }
}  


export default App;
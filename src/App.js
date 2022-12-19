import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import List from './components/List';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }

      
    
  
  render(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<List/>}/>
        
         
        </Routes>
   
   </Router>

    )
}
}
export default App;


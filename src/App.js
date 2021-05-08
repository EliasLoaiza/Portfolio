import React from 'react';
import './index.css';
import './font.css';
import NavBar from './NavBar.js';
import Presentation from './Presentation.js';
import Technologies from  './Technologies';
import Projects from "./Projects";
import { Component } from 'react';

class App extends Component{
    render(){
        return (
         <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"></link>
            <NavBar />
            <Presentation />
            <Technologies />
            <Projects />
         </div>
        );     
    } 
}
export default App;
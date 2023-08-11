import React from 'react';
import './index.css';
import './font.css';
import { NavBar } from './Components/Navbar/NavBar';
import { Presentation } from './Components/Presentation/Presentation';
import { Technologies } from  './Components/Technologies/Technologies';
import { Projects } from "./Components/Projects/Projects";

function App(){
        return (
         <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"></link>
            <NavBar/>
            <Presentation/>
            <Technologies/>
            <Projects/>
         </div>
        );      
}
export {App};
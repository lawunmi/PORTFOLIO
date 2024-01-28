import React from 'react';
import { Link } from 'react-router-dom';
import MRlogo from '../src/assets/images/MRlogo.png';
export default function Layout() {
    return (
        <>
            <div id="logodiv">       
            <img src = {MRlogo} alt="mrlogo" id="mrlogo" width="120px" height="120px"/>
            </div>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/service">Service</Link>| 
                <Link to="/project">Project</Link>| 
                <Link to="/contact">Contact</Link>
            </nav>
        <hr />
    </>
 );
}

import React from "react";

import Page1 from './Page1';
import {Link}from 'react-router-dom'
const Nav=()=>{
    return( <>
      <nav>  
        <div className="logo">LOGO</div>
        <ul>
            <li><Link to={"/page1"}>Page1</Link></li>
            <li><Link to={"/page2"}>Page2</Link></li>
            <li><Link to={"/product"}>Product</Link></li>

            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/gallary"}>Gallary</Link></li>
            <li><Link to={"/about"}>About</Link></li>
        

        </ul>
      </nav> 


       

       

     

      </>
     
    )
}

export default Nav
import React from 'react';
import { Link} from "react-router-dom";

function Header (){

    return (
        <div id="header">
        <h1><Link to ="/">QuizFiend  <i className="far fa-grin-squint-tears"></i>  </Link> </h1>
        
           
        </div>
    )
}

export default Header; 
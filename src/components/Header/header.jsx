import React, {useState} from "react";
import './header.css';

const Header = (props)=>{ 

    return(
        <section className="header">
            <div className="realisationTitle">
                <h1>{props.title}</h1>
                
                <p>{props.description}</p>
            </div>

        </section>
    )
}


export default Header;
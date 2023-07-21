import React from "react";
import './button.css';
import VecteurIcon from "../../assets/Vector.png";

const Button = (props)=>{ 

    return(
        <button className="btn">
            <a href="">{props.name}</a>
            <img src={VecteurIcon} alt="Icône vecteur pour bouton" />
        </button>           
    )
}


export default Button;
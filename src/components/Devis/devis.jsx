import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import './devis.css';
import VecteurIcon from "../../assets/Vector.png";
import ChatRobot from "../../assets/chatbot 1.png";
import Button from "../Buttons/button";

const Devis = ()=>{ 
    return(
        <section className="devis">
            
            <img src={ChatRobot} alt="Image de présentation" className="robot"/>
            
            <div className="form">
                <h2>Demander un devis</h2>

                <form action="" method="POST">
                    <input type="text" name="surname" placeholder="Entrer votre nom"/>

                    <input type="text" name="name" placeholder="Entrer votre prénom"/>

                    <input type="email" name="email" placeholder="Adresse mail"/>

                    <textarea name="description" id="" cols="30" rows="10" placeholder="Description du Projet"></textarea>

                    <Button name="Collaborons">
                        <input type="submit" />
                    </Button>
                </form>
            </div>

            <Link to="/">
                <img className="outIcon" src={VecteurIcon} alt=""/>
            </Link>
        </section>
    )
}


export default Devis;
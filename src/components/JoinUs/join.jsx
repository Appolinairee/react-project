import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import './join.css';
import '../Devis/devis.css';
import VecteurIcon from "../../assets/Vector.png";
import ChatRobot from "../../assets/chatbot 1.png";
import Button from "../Buttons/button";

const Join = ()=>{

    return(
        <section className="devis">
            
            <img src={ChatRobot} alt="Image de présentation" className="robot"/>
            
            <div className="form">
                <h2>Rejoindre l'équipe</h2>

                <form action="" method="POST">
                    <input type="text" name="surname" placeholder="Entrer votre nom"/>

                    <input type="text" name="name" placeholder="Entrer votre prénom"/>

                    <input type="email" name="email" placeholder="Adresse mail"/>

                    <input type="contact" name="contact" placeholder="Contact téléphonique"/>

                    <div className="inputCV">
                        <label htmlFor="cv">Envoyer votre CV (nationnalité incluse)</label>

                        <input type="file" name="cv" id="cv" />
                    </div>

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


export default Join;
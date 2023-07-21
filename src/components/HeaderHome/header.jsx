import React, {useState, useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import './header.css';
import ArrowIcon from "../../assets/Arrow - Right Circle.png"
import ImageChatBot from "../../assets/chatbot 1.png"
import Join from "../JoinUs/join";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ()=>{ 

    useEffect(() => {
        AOS.init( {
            easing: 'ease'
        } )
    }, []);

    return(
        <section className="header">
            
            <div className="headerContent">

                <div className="headerText">
                    <div className="headerTextTitle">
                        <span>Avec Alitcha Technologies,</span>
                        <h1  data-aos="zoom-in">Rien ne vous <br /> sera <b>Impossible.</b> </h1>
                    </div>
                   
                    <div className="illusRespons">
                    <img src={ImageChatBot} alt="Image de robot: présentation d'Alitcha" className="ImageChatBot" />
                    </div>

                    <p className="description">
                    Nous sommes une startups répondant à des besoins précis, des produits et services technologiques conformément à nos domaines d’expertise. Et ce, que vous soyez une entreprise, une organisation, un entrepreneur, un gouvernement ou un particulier.
                    </p>

                    <button className="btn">
                        <NavLink to="join" data-aos="fade-right">Nous rejoindre</NavLink>
                        <img src={ArrowIcon} data-aos="zoom-in" data-aos-delay="100" className="icon" alt="Icon de flèche de direction" />
                    </button>

                </div>

                <div className="headerIllustration">
                    <img src={ImageChatBot} alt="Image de robot: présentation d'Alitcha" className="ImageChatBot" />
                </div>
            </div>
        </section>
    )
}

export default Header;
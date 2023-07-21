import React, {useState, useEffect} from "react";
import './about.css';
import Button from "../Buttons/button";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = ()=>{ 
    
    useEffect(() => {
        AOS.init();
    }, []);

    return(
        <section className="abouts">
                <div className="aboutTitle">
                    <span>à propos</span>
            
                    <h2 data-aos="fade-right">Qui sommes-nous?</h2>

                    <div className="aboutButton">
                        <Button name="En savoir plus"/>
                    </div>
                </div>

                <div className="aboutContent">
                    {/* UNE BACKGROUND A METTRE A JOUR */}

                    <div className="contentPlus" data-aos="fade-left">
                        <b>Lorem Ipsum is simply dummy</b>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
        </section>
    )
}


export default About;
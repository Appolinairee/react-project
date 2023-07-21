import React, {useState, useEffect} from "react";
import './newsletter.css';
import Button from "../Buttons/button";
import newsImage from '../../assets/undraw_newsletter_re_wrob 1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newsletter = ()=>{ 

    useEffect(() => {
        AOS.init(
            {
                easing: 'ease'
            }     
        );
    }, []);

    return(
        <div className="newsletter">

            <div className="newsLeft">
                <h2>Rejoignez notre Newsletter</h2>

                <div className="newsletterForm" data-aos="fade-top">
                    <form action="">

                        <div className="input nameInput">
                            <label htmlFor="name">Nom et Prénoms</label>
                            <input type="text" id="name" />
                        </div>

                        <div className=" input emailInput">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>

                        <Button name="Soumettre">
                            <input type="submit" />
                        </Button>
                    </form>
                </div>
            </div>

            <div className="newsRight" data-aos="zoom-in">
                <img src={newsImage} alt="Image de Newsletter" />
            </div>
            
        </div>
    )
}


export default Newsletter;
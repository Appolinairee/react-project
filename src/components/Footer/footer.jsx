import React, {useState, useEffect} from "react";
import './footer.css';
import ImageFooter from '../../assets/Logo png-06 1.png';
import IconInsta from '../../assets/Group 11.png';
import IconFacebook from '../../assets/Group 5.png';
import IconLink from '../../assets/Group 9.png';
import IconTwitter from '../../assets/Group 10.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ()=>{ 

    useEffect(() => {
        AOS.init( {
            easing: 'ease'
        } )
    }, []);

    return(
        <div className="footer">

            <div className="footContent">
                <div className="alitchaInfo">
                    <img src={ImageFooter} alt="Logo Alitcha" data-aos="zoom-in"/>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>

                <div className="footerLists">
                    <ul className="links">
                        <h3>Liens annexes</h3>
                        <li><a href="#">Lorem Ik</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Carees</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>

                    <div className="contacts">
                        <h3>Nous contacter</h3>
                        <p className="contactDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>

                        <p>+229 89097 890</p>
                    </div>
                </div>

                <div className="icons">
                    <p data-aos="fade-up"><img src={IconFacebook} alt="image Facebook" /></p>
                    
                    <p data-aos="fade-up" data-aos-delay="100"><img src={IconInsta} alt="image Instagram" /></p>
                    
                    <p data-aos="fade-up" data-aos-delay="200"><img src={IconTwitter} alt="image twitter" /></p>
                    
                    <p data-aos="fade-up" data-aos-delay="300"><img src={IconLink} alt="image" /></p>
                    
                </div>
            </div>

            <p className="end">
            © 2023 ALITCHA. TOUT DROITS RESERVES.
            </p>
            
        </div>
    )
}


export default Footer;
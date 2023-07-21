import React from "react";
import Navbar from "../NavBar/navbar";
import Faq from "./../faq/faq";
import './contact.css';
import Header from "../Header/header";
import Icon1 from "../../assets/Group 123.png";
import Icon2 from "../../assets/Group 124.png";
import Icon3 from "../../assets/Group 125.png";
import Button from "../Buttons/button";

const Contact = ()=>{

    return(
        <> 
            <div className="contact">
                <Navbar />

                <Header title="Contact" description="Agency provides a full service range including technical skills, design, business understanding." /> 

                <div className="form">
                    <h3>Envoyez un message</h3>

                    <form action="">
                        <input type="email" placeholder="Votre email"/>
                        <input type="message" placeholder="Sujet"/>

                        <textarea name="" id="" cols="30" rows="5" placeholder="Message"></textarea>

                        <Button name="Envoyer" />
                    </form>
                </div>

                <div className="contactDetails">
                    <div className="contactDetail">
                        <div className="contactDetailsTitle" >
                            <img src={Icon1} alt="" />
                            <p>Phone</p>
                        </div>

                        <p>+1 (234) 567-89-00</p>
                    </div>

                    <div className="contactDetail">
                        <div className="contactDetailsTitle" >
                            <img src={Icon2} alt="" />
                            <p>EMail</p>
                        </div>

                        <p>info@agency.com</p>
                    </div>

                    <div className="contactDetail">
                        <div className="contactDetailsTitle" >
                            <img src={Icon3} alt="" />
                            <p>Address</p>
                        </div>

                        <p>2247 Lunetta Street, TX 76301</p>
                    </div>
                </div>

                <Faq classUse='' />  
            </div>
            
        </>
    )
}

export default Contact;
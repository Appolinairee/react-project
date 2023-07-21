import React from "react";
import './proposContent.css';
import Icon from "../../assets/Group 143.png";
import Founder from "../../assets/Oval.png";

const ProposContent = ()=>{
    return(
        <> 
            <div className="proposContent">
                <span>à propos</span>

                <div className="presentation">

                    <div className="presentationIllus">
                        <img src={Founder} alt="Fondateur de la communauté Alitcha" />

                        <h2>With <b> Alitcha</b>, <br /> Be your own <b>hero</b> </h2>
                    </div>
                   
                   <div className="presentationDescrip">
                    <p>"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, impedit molestias! Autem, temporibus eligendi suscipit minima nihil pariatur, quisquam repellendus dolore eveniet repellat minus iste deserunt consequatur placeat sint animi repudiandae expedita fuga.  "</p>

                    <span>
                        <b>Denison YEWADAN, </b>
                        <i>Fondateur de la Communauté Alitcha</i>
                    </span>
                   </div>
                    
                </div>

                <div className="proposTitle">
                    <h1>Une Expérience <br />Unique</h1>
                    <p>
                    Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.

                    <br /><br />

                    A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                    </p>
                </div>

                <div className="proposDescription">
                    <div className="proposContentText">
                        <h4>Nos Valeurs</h4>
                        <b>Un titre de deux lignes fera certainement l’affaire</b>

                        <p>Un texte sur trois lignes Un texte sur trois lignes Un texte sur trois lignes Un texte sur trois lignes Un texte sur trois lignes </p>
                    </div>


                    <div className="proposContentCard">
                        <img src={Icon} alt="Icon du professionnelisme" />
                        <h4>Professional</h4>
                        <p>Full service range including technical skills, design.</p>
                    </div>

                    <div className="proposContentCard">
                        <img src={Icon} alt="Icon pour les statistiques" />
                        <h4>Accessibility</h4>
                        <p>Business understanding, ability to put themselves.</p>
                    </div>
                </div>

                <div className="proposStats">
                    <div className="proposStatsUnit">
                        <span>42%</span>
                        <p>Years of experience</p>
                    </div>

                    <div className="proposStatsUnit">
                        <span>73+</span>
                        <p>Agency members</p>
                    </div>

                    <div className="proposStatsUnit">
                        <span>5.000</span>
                        <p>Projects complete</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProposContent;
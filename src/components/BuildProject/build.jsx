import React, {useState} from "react";
import './build.css';
import BuildImage from "../../assets/pic.png";

const Build = (props)=>{ 
    return(
        <section className={`build ${props.classUse}`}>
            <div className="buidContent">
                <h1>Nous aidons à réaliser vos projets</h1>

                <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

                <button>Contacter</button>
            </div>

            <div className="buildIllustration">
                <img src={BuildImage} alt="Construire votre projet avec nous" />
            </div>
        </section>
    )
}

export default Build;


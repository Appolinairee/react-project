import React, {useState} from "react";
import './proposmain.css';
import AuthorPhoto1 from '../../../assets/Oval.png';
import Star from "../../../assets/Star (1).png";
import Arrow from "../../../assets/up.png";
import Faq from "../../faq/faq";
import Partenaires from "./Partenaires/partenaires";
import Build from "./../../BuildProject/build"

// WARNING: La logique du carroussel des avis est à revoir(surtout pour la responsivité)

const ProposMain = ()=>{

    const Testimonies = [
        // WARNING: first and last are for style and responsivity

        {
            starsNumber: 1,
            description: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, ",
            authorPicture: AuthorPhoto1,
            authorName: "Fin",
            authorActivity: "Meta Inc."
        },

        {
            starsNumber: 5,
            description: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, ",
            authorPicture: AuthorPhoto1,
            authorName: "Alan Martí",
            authorActivity: "Meta Inc."
        },

        {
            starsNumber: 4,
            description: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, ",
            authorPicture: AuthorPhoto1,
            authorName: "Alan Martí",
            authorActivity: "Meta Inc."
        },

        {
            starsNumber: 3,
            description: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, ",
            authorPicture: AuthorPhoto1,
            authorName: "Alan Martí",
            authorActivity: "Meta Inc."
        },

        {
            starsNumber: 1,
            description: "A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you. A digital agency is a business you hire to outsource your digital marketing efforts, ",
            authorPicture: AuthorPhoto1,
            authorName: "End",
            authorActivity: "Meta Inc."
        }
    ]


    const [avisIndex, setAvisIndex] = useState(1);    

    const increment = ()=>{
        if (avisIndex < Testimonies.length-1)
            setAvisIndex(avisIndex+1);

        avisPresentation(1);
    }

    const decrement = ()=>{
        if (avisIndex >= 1)
       setAvisIndex(avisIndex-1);

       avisPresentation(-1);
    } 

    const elements = [];
    for (let i = 1; i < Testimonies.length-1; i++)
        elements.push(<button className={avisIndex === i? 'buttonActif' : ''} onClick={()=>{setAvisIndex(i); avisPresentation(avisIndex)}} key={i}></button>);

    const stars = (index)=>{
        let stars = [];

        for (let i = 0; i < index; i++)
           stars.push(<img src={Star} alt="" />);

        return stars;
    }
    
    function avisPresentation (type){
        let largueur =  document.querySelector('.avisActif').offsetWidth;
        let elements = document.querySelectorAll('.testimony');

        let translateLenght;

        if (type === 1 || type === -1) {
            translateLenght = -largueur*avisIndex - largueur*0.33*type;

            if(type == -1)
            translateLenght += largueur*1.33;
        }else{
            translateLenght = -largueur*type - largueur*0.33;
        }

        elements.forEach(element => {
            element.style.transform = `translateX(${translateLenght}px)`
        });
    }

    return(
        <> 
            <div className="proposmain">
                <div className="proposmainTitle">
                    <span>Avis</span>
                    <h2>Ce que disent <br /> nos clients</h2>
                </div>

                <div className="testimonies">
                    {Testimonies.map((avis, index)=>(
                        <div  key={index} className={
                            avisIndex === index
                            ? "testimony avisActif"
                            : "testimony"
                        }>
                            <div className="testimonyStars">
                                {stars(avis.starsNumber)}
                            </div>
                            
                            <p className="description">{avis.description} </p>

                            <div className="avisProfil">
                                <img src={avis.authorPicture} alt={avis.authorName} />

                                <div className="avisProfilText">
                                    <h4>{avis.authorName} {index}</h4>
                                    <p>{avis.authorActivity} </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="incrementsButtons">
                        <img className={avisIndex <= 1? "buttonActif": ""} src={Arrow} onClick={decrement} alt="" />

                        <img src={Arrow} className={avisIndex >= Testimonies.length-2? "buttonActif": ""} onClick={increment} alt="" />
                    </div>
                </div>

                <div className="testimoniesIndex">
                    {elements}
                </div>

                <Faq classUse='propos' />

                <Partenaires />

                <Build classUse="propos" />
            </div>
        </>
    )
}

export default ProposMain;
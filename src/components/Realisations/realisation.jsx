import React, {useState, useEffect} from "react";
import './realisation.css';
import VecteurIcon from "../../assets/VectorAli.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Realisation = ()=>{ 

    useEffect(() => {
        AOS.init( {
            easing: 'ease'
        } )
    }, []);

    const RealisationsData = [
        {
            presentation: "Kumaa ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. ",

            objectif: "Kumaa issues ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. ",

            resultat: "Our results ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. "
        },

        {
            presentation: "Alitcha Framework ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. ",

            objectif: "Framework Objectifs dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. ",

            resultat: "Lorem ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. "
        },

        {
            presentation: "Lorem ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. ",

            objectif: "Lorem ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. ",

            resultat: "Lorem ipsum dolor sit amet consectetur. Nibh cras vitae non sodales nulla nunc eu amet. Eget ac cursus tristique in lectus sed a quis. Id nulla et posuere molestie malesuada vel. Ac nisi quis ipsum massa vel feugiat leo in. Id in urna dolor aliquet diam tincidunt. Diam id aliquam nulla gravida sit vestibulum mauris tempus. Non amet maecenas fermentum amet integer. "
        }
    ]

    const [realisationIndex, setRealisationIndex] = useState(0);

    const realisationChange = (index)=>{
        setRealisationIndex(index);
    }

    return(
        <section className="realisations">
                <h2>Réalisations</h2>
            
                <h1>Qu'avons-nous déjà fait?</h1>

                <div className="realisationAll">
                    <ul className="realisationList">

                        <li onClick={()=>realisationChange(0)} className={realisationIndex === 0? 'actif': ''}>
                            <img src={VecteurIcon} alt="icône" />
                            <p>Kumaa</p>
                        </li>

                        <li onClick={()=>realisationChange(1)} className={realisationIndex === 1? 'actif': ''}>
                            <img src={VecteurIcon} alt="icône" />
                            <p>Alitcha Framework</p>
                        </li>

                        <li onClick={()=>realisationChange(2)} className={realisationIndex === 2? 'actif': ''}>
                            <img src={VecteurIcon} alt="icône" />
                            <p>Nyota</p>
                        </li>

                    </ul>

                    <div className="realisationsDesc">

                        <div className="realisationDesc" data-aos="fade-right">
                            <b>Présentation</b>
                            <p>{RealisationsData[realisationIndex].presentation} </p>
                        </div>

                        <div className="realisationDesc" data-aos="fade-right" data-aos-delay="200">
                            <b>Objectifs</b>
                            <p>{RealisationsData[realisationIndex].objectif} </p>
                        </div>

                        <div className="realisationDesc" data-aos="fade-right" data-aos-delay="400">
                            <b>Résultats</b>
                            <p>{RealisationsData[realisationIndex].resultat}</p>
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default Realisation;
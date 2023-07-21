import React, {useState} from 'react';
import './AdminBer.css';
import Button from "../../../components/Buttons/button";
import Image from '../../../assets/imprimante.jpg';
import Arrow from '../../../assets/up.png';

const Anewsletters = () => {

    const articles = [
        {
          id: 1,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
        },
    
        {
          id: 2,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
        },
    
        {
          id: 3,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="adminber">

      <div className="editForm">
        <h2>Créer un Newsletter</h2>

        <form action="" method="POST">
            <div className="flex">
                <input type="text" className="input" id='title' placeholder="Titre du message"/>

                <textarea name="description" id="" cols="30" rows="10" placeholder="Contenu du message"></textarea>

                <input type="text" className="input" placeholder="Liens..."/>
            </div>

            <Button className='button' name="Envoyer">
                <input type="submit" />
            </Button>
        </form>

      </div>

      {/* Affichage des éléments */}
      <div className="elements">
        <h2>Table des Newsletters</h2>

        <div className="questionsContent">
            {
                articles.map((item, index)=>(
                  <div 
                      className={
                          selectedIndex === index 
                          ? "questionContent actif" 
                          : "questionContent"
                      }  
                      key={index} 
                      onClick={()=>setSelectedIndex(index)} 
                  >
                      <div className="contentTitle">
                          <h3> {index+1} -\ {item.title}</h3>
                          
                          <img src={Arrow} alt="Flèche de déroulement" />
                      </div>

                      <div className="contentDetails flex" style={ {textAlign: 'left'} }>
                        <div className="contentIllustration">
                            <b>Publié le: {item.date} </b>
                            <p className="answer">{item.description} </p>
                        </div>
                      </div>
                  </div>
                ))                        
            }
        </div>
      </div>

    </div>
  )
}

export default Anewsletters;
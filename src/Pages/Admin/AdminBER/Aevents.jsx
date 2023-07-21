import React, {useState} from 'react';
import './AdminBer.css';
import Button from "../../../components/Buttons/button";
import Image from '../../../assets/imprimante.jpg';
import Arrow from '../../../assets/up.png';
import UpdateForm from './EditElement';

const Aevents = () => {

    const articles = [
        {
          id: 1,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
          image: Image,
          lieu: "En ligne"
        },
    
        {
          id: 2,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
          image: Image,
          lieu: "Abomey-Calavi"
        },
    
        {
          id: 3,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
          image: Image,
          lieu: "Cotonou"
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [updateIndex, setUpdateIndex] = useState(0);

  return (
    <div className="adminber">

      <div className="editForm">
        <h2>Création d'événement</h2>

          <form action="" method="POST">

            <div className="flex">
                <input type="text" className="input" placeholder="Titre..."/>
                <input type="date" className="input"/>
                <input type="text" placeholder="Lieu de l'événement" className="input" />
                <div className="inputImage">
                    <label htmlFor="image">Image de ...</label><br />
                    <input type="file" name="image" id="image" />
                </div>
            </div>

              <Button className='button' name="Envoyer">
                  <input type="submit" />
              </Button>
          </form>
      </div>

      { updateIndex==1 && <div className='overlayUpdateElt' onClick={() => setUpdateIndex(0)}></div> }
      {/* Affichage des éléments */}
      <div className="elements">
        <h2>Table des événements</h2>
       

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
                          
                          <p onClick={() => setUpdateIndex(1)}>Edit</p>
                          <p>Supprimer</p>
                          <img src={Arrow} alt="Flèche de déroulement" />
                      </div>

                      <div className="contentDetails flex">
                        <div className="contentIllustration">
                          <img src={item.image} alt={item.title} />
                          <p>Lieu: {item.lieu}</p>
                        </div>

                        <div className='description flex'>
                          <b> {item.date} </b>
                          <p className="answer">{item.description} </p>
                        </div>
                      </div>

                      {updateIndex==1 && selectedIndex === index && <UpdateForm id={item.id} />}
                  </div>
                ))                        
            }
        </div>
      </div>

    </div>
  )
}

export default Aevents;
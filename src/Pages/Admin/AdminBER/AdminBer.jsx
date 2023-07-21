import React, {useState} from 'react';
import './AdminBer.css';
import Button from "../../../components/Buttons/button";
import Image from '../../../assets/imprimante.jpg';
import Arrow from '../../../assets/up.png';
import EditRealiElement from './EditRealiElement';

const Realisations = () => {

    const articles = [
        {
          id: 1,
          title: "Kumaa, le géant du web",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
          image: Image,
          nombreLecture: 20
        },
    
        {
          id: 2,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
          image: Image,
          nombreLecture: 36
        },
    
        {
          id: 3,
          title: "La technologie, une révolution ou une urgence",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti exercitationem quod quam? Repudiandae qui odit sequi? Tempore, qui aspernatur.",
          date: "29/11/2003",
          image: Image,
          nombreLecture: 27
        }
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [updateIndex, setUpdateIndex] = useState(0);

  return (
    <div className="adminber">

      <div className="editForm">
        <h2>Publier une réalisation</h2>

        <form action="" method="POST">
            <div className="flex">
                <input type="text" className="input" id='title' placeholder="Titre de la réalisation"/>

                <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>

                <input type="text" className="input" id='title' placeholder="Lien externe"/>

                <div className="inputImage">
                    <label htmlFor="image">Image de la réalisation</label><br />
                    <input type="file" name="image" id="image" />
                </div>
            </div>

            <Button className='button' name="Publier">
                <input type="submit" />
            </Button>
        </form>

      </div>

      { updateIndex==1 && <div className='overlayUpdateElt' onClick={() => setUpdateIndex(0)}></div> }

      {/* Affichage des éléments */}
      <div className="elements">
        <h2>Table des réalisations</h2>
       

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
                          <p> <b>{item.nombreLecture}</b> Lectures</p>
                        </div>

                        <div className='description flex'>
                          <p className="answer">{item.description} </p>
                          <b>Publié le: {item.date} </b>
                        </div>
                      </div>

                      {updateIndex==1 && selectedIndex === index && <EditRealiElement id={item.id} />}
                  </div>
                ))                        
            }
        </div>
      </div>

    </div>
  )
}

export default Realisations;
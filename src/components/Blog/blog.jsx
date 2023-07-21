import React, {useState, useEffect} from "react";
import './blog.css';
import './blog_card.css';
import IconLeft from "../../assets/Group 38.png";
import IconRight from "../../assets/Group 37.png";
import Button from "../Buttons/button";
import ImgEvent1 from "../../assets/Rectangle 18.png";
import ImgEvent2 from "../../assets/Rectangle 19.png";
import ImgEvent3 from "../../assets/Rectangle 20.png";
import ImgEvent4 from "../../assets/Rectangle 21.png";
import ImgEvent5 from "../../assets/Rectangle 23.png";

import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = ()=>{
    useEffect(() => {
        AOS.init( {
            easing: 'ease'
        } );
    }, []);

    // Ceci est une classe de données des cartes de blog
    const cardData = [
        {
            img: ImgEvent1,
            date: "01/06/2023",
            type: "Pas de rédaction",
            title: "Titre de l'article 1 qui ne doit pas être trop long",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },

        {
            img: ImgEvent2,
            date: "01/06/2023",
            type: "Pas de rédaction",
            title: "Titre de l'article 2 qui ne doit pas être trop long",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },

        {
            img: ImgEvent3,
            date: "01/06/2023",
            type: "Pas de rédaction",
            title: "Titre de l'article 3 qui ne doit pas être trop long",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },

        {
            img: ImgEvent4,
            date: "01/06/2023",
            type: "Pas de rédaction",
            title: "Titre de l'article 4 qui ne doit pas être trop long",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },

        {
            img: ImgEvent5,
            date: "01/06/2023",
            type: "Pas de rédaction",
            title: "Titre de l'article 5 qui ne doit pas être trop long",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
    ]

    let [cardIndex, setCardIndex] = useState(0);

    const cardStyle = {
        transform: `translateX(-${cardIndex * 106}%)`
    }

    const following = ()=>{
        if(cardIndex < cardData.length-1)
            setCardIndex(cardIndex + 1);
    }

    const previous = ()=>{
        if(cardIndex > 0)
        setCardIndex(cardIndex - 1);
    }

    return(
        <section className="blogs">
            <div className="blogsTitle">
                    <span>Blog</span>
                    
                    <h2  data-aos="fade-right">Nous vous <br /> tenons informer</h2>

                    <div className='blogButtons'>
                        <img onClick={()=>previous()} src={IconLeft} alt="icône pour défiler vers la gauche"/>

                        <img onClick={()=>following()} src={IconRight} alt="icône pour défiler vers la gauche" />
                    </div>
            </div>

            <div className="blogsContent">
                {
                    cardData.map((item) =>(
                        <div className="blog_card" style={cardStyle}>
                            <div className="card_img">
                                <img src={item.img} alt={item.title} />
                            </div>

                            <div className="card_info">
                                <div className="card_title">
                                    <p>{item.type}</p>
                                    <p>{item.date}</p>
                                </div>

                                <h3>{item.title}</h3>

                                <div className="cardDescription">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {/* Ajout d'éléments en surplus pour gestion de la responsivité */}
                {cardData.slice(0, 4).map((item) =>(
                    <div className="blog_card" style={cardStyle}>
                        <div className="card_img">
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className="card_info">
                            <div className="card_title">
                                <p>{item.type}</p>
                                <p>{item.date}</p>
                            </div>

                            <h3>{item.title}</h3>

                            <div className="cardDescription">
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>

            <div className="blogButton" data-aos="fade-right">
                <Button name="Voir plus" />
            </div>
        </section>
    )
}


export default Blog;
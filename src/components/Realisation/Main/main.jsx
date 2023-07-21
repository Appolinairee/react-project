import React, {useState} from "react";
import './main.css';
import ReactDOM from "react-dom";
import RealisationsImage1 from "../../../assets/Rectangle 18.png";
import RealisationsImage2 from "../../../assets/Rectangle 19.png";
import RealisationsImage3 from "../../../assets/Rectangle 20.png";


const Main = ()=>{ 

    const Data = [
        {
            img: RealisationsImage1,
            categorie: "Alitcha Labs",
            title: "Kumaa"
        },
        {
            img: RealisationsImage2,
            categorie: "Alitcha Business Tools",
            title: "Kumaa"
        },
        {
            img: RealisationsImage3,
            categorie: "Alitcha Services",
            title: "Kumaa"
        },
        {
            img: RealisationsImage1,
            categorie: "Alitcha Labs",
            title: "Kumaa"
        },
        {
            img: RealisationsImage2,
            categorie: "Alitcha Business Tools",
            title: "Kumaa"
        },

        {
            img: RealisationsImage3,
            categorie: "Alitcha Labs",
            title: "Kumaa"
        },
        {
            img: RealisationsImage2,
            categorie: "Alitcha Business Tools",
            title: "Kumaa"
        },
        {
            img: RealisationsImage1,
            categorie: "Alitcha Services",
            title: "Kumaa"
        },
        {
            img: RealisationsImage3,
            categorie: "Alitcha Labs",
            title: "Kumaa"
        },
        {
            img: RealisationsImage2,
            categorie: "Alitcha Business Tools",
            title: "Kumaa"
        },

        {
            img: RealisationsImage1,
            categorie: "Alitcha Labs",
            title: "Kumaa"
        },
        {
            img: RealisationsImage3,
            categorie: "Alitcha Business Tools",
            title: "Kumaa"
        },
        {
            img: RealisationsImage2,
            categorie: "Alitcha Services",
            title: "Kumaa"
        },
        {
            img: RealisationsImage1,
            categorie: "Alitcha Labs",
            title: "Kumaa"
        },
        {
            img: RealisationsImage3,
            categorie: "Alitcha Business Tools",
            title: "Kumaa"
        }
    ]

    const [categorie, setCategorie] = useState("Tout");
    const [categorieNumber, setCategorieNumber] = useState(5);

    function categorieChange (e){
        setCategorie(e.target.textContent);
        let categories = document.querySelectorAll(".categorie");

        categories.forEach(categorie =>
            categorie.className = "categorie"
        );

        e.target.className = "categorie actifCategorie";
    }

    const items = 
    categorie === "Tout"
    ? Data 
    : Data.filter((item) => item.categorie === categorie);

    function categorieMore(e) {
        if (categorieNumber < items.length) 
            setCategorieNumber(categorieNumber + 5);
        else
            setCategorieNumber(categorieNumber);

        let categoriesMore = document.querySelectorAll(".categorieMore");
        
        categoriesMore.forEach(categorie =>
            categorie.className = "categorieMore"
        );

        e.target.classList = "categorieMore actif";
    }

    function RealisationPresentation(event) {
        event.preventDefault();
        ReactDOM.render("Realisation 1", document.getElementById("realisations"));
    }

    return(
        <section className="main">
            <div className="categorieLists">
            <ul>
                    <li className="categorie"><p onClick={categorieChange}>Tout</p><span>14</span></li>

                    <li> <p onClick={categorieChange}>Alitcha Business Tools</p> <span>1</span></li>

                    <li> <p onClick={categorieChange}>Alitcha Labs</p> <span>3</span></li>

                    <li> <p onClick={categorieChange}>Alitcha Services</p> <span>6</span></li>
                </ul>
            </div>

            <div className="realisationsMain">
                {
                    items.slice(0, categorieNumber).map((item) => (
                        <div className="realisationMain" onClick={RealisationPresentation}>
                            <img src={item.img} alt={item.title} />

                            <div className="realisationDetails">
                                <p>{item.categorie}</p>
                                <h2>{item.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="progress">
                <ul>
                    <li onClick={categorieMore} className="categorieMore actif">1</li>
                    <li onClick={categorieMore} className="categorieMore">2</li>
                    <li onClick={categorieMore} className="categorieMore">3</li>
                    <li onClick={categorieMore} className="categorieMore">4</li>
                    <li onClick={categorieMore} className="categorieMore">5</li>
                </ul>
            </div>
        </section>
    )
}


export default Main;


import React, {useState, useEffect} from "react";
import './events.css';
import Button from "../Buttons/button";
import ImgEvent1 from "../../assets/Rectangle 18.png";
import ImgEvent2 from "../../assets/Rectangle 19.png";
import ImgEvent3 from "../../assets/Rectangle 20.png";
import ImgEvent4 from "../../assets/Rectangle 21.png";
import ImgEvent5 from "../../assets/Rectangle 23.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Events = ()=>{ 

    useEffect(() => {
        AOS.init();
    }, []);

    const EventData = [
        {
            img: ImgEvent1,
            title: "Titre de l'évènement",
            date: "Date et Heure",
            place: "Lieu"
        },

        {
            img: ImgEvent2,
            title: "Titre de l'évènement",
            date: "Date et Heure",
            place: "Lieu"
        },

        {
            img: ImgEvent3,
            title: "Titre de l'évènement",
            date: "Date et Heure",
            place: "Lieu"
        },

        {
            img: ImgEvent4,
            title: "Titre de l'évènement",
            date: "Date et Heure",
            place: "Lieu"
        },

        {
            img: ImgEvent5,
            title: "Titre de l'évènement",
            date: "Date et Heure",
            place: "Lieu"
        },


    ]

    return(
        <section className="events">
                <div className="eventsTitle">
                    <span>évènements</span>
            
                    <h2>Que prévoyons-nous ?</h2>
                </div>

                <div className="eventsContents">
                    {EventData.map((item) => (
                        <div className="event" data-aos="fade-right">
                        <img src={item.img} alt={item.title} />

                        <div className="eventContent">
                            <div className="eventTitle">
                                <p>{item.title}</p>
                                <p>{item.date}</p>
                            </div>

                            <p className="place">{item.place}</p>
                        </div>
                    </div>
                    ))}
                </div>

                <Button name="Tout voir" />
        </section>
    )
}


export default Events;
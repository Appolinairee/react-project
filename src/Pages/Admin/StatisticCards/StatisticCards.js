import React from 'react';
import StatisticCard from './StatisticCard';
import './statistics.css';
import Anewsletters from '../Aadhesions/Aadhesion';
import {FaMoneyCheckAlt} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {FaServicestack} from 'react-icons/fa';
import {RiArticleFill} from 'react-icons/ri';
import { Line } from 'react-chartjs-2';

const StatisticCards = () => {
    
// Données pour la courbe
const data = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [
      {
        label: 'Ventes',
        data: [12, 14, 3, 5, 2,10, 17],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: .5,
      },
    ],
  };

  // Options pour la courbe
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

    const CardsInfo = [
        {
            title: "TODAY'S MONEY", 
            etat: "$3.462", 
            percent: +4, 
            desc: "since yesterday",
            staticon: FaMoneyCheckAlt
        },
        {
            title: "TODAY'S USERS", 
            etat: "1000", 
            percent: -2, 
            desc: " since last week",
            staticon: FiUsers
        },
        {
            title: "NEW CLIENTS", 
            etat: "4", 
            percent: +6, 
            desc: "since last quarter",
            staticon: FaServicestack
        },
        {
            title: "ARTICLES", 
            etat: "24", 
            percent: -1, 
            desc: "than last month",
            staticon: RiArticleFill
        },
    ]

  return (
        <section className="adminmain">
            <div className="statcars">
                {
                    CardsInfo.map((card, index) =>(
                        <StatisticCard title={card.title} etat={card.etat} percent={card.percent} desc={card.desc} key={index} staticon={card.staticon}/>
                    ))
                }
            </div>

            <div>
                <Anewsletters />
                U7YGGEFYHG
            </div>
        </section>
        
  )
}

export default StatisticCards;
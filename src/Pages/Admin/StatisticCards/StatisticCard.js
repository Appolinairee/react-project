import React from 'react';
import {FaBlog} from 'react-icons/fa';

const StatisticCard = (props) => {

  return (
    <div className="statcard flex">
        <div className="statcardContent">
            <h3> {props.title} </h3>
            <b> {props.etat} </b>

            <p>
              <span style={{color: (props.percent < 0)? 'red': 'green'}}>
                {
                  props.percent + "% "
                }
              </span> 
              {props.desc}</p>
        </div>

        <props.staticon className='icon' />
    </div>
  )
}

export default StatisticCard;
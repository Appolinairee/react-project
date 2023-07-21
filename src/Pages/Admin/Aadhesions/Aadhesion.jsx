import React, {useState} from 'react';
import './Aadhesion.css';

const Anewsletters = () => {

    const adhesions = [
        {
          id: 1,
          nom: "Samuel",
          prenom: "Dupon",
          email: "duponsam@gmail.com",
          number: "+22965789488",
        },
    
        {
            id: 1,
            nom: "Samuel",
            prenom: "Dupon",
            email: "duponsam@gmail.com",
            number: "+22965789488",
        },

        {
            id: 1,
            nom: "Samuel",
            prenom: "Dupon",
            email: "duponsam@gmail.com",
            number: "+22965789488",
        }
    ];

  return (
      <div className="adhesionstable">
        <h3>Adhésions</h3>

        <table>
          <tbody>
            {
                adhesions.map((item, index)=>(
                  <tr>
                      <td className='name'>
                          <p>{item.nom}  {item.prenom} </p>
                          <p> {item.email} </p>
                      </td>

                      <td className='valider'>
                        <p>Valider</p>
                      </td>
                      <td className='voircv'>
                        <p>Voir CV</p>
                      </td>
                      <td className='delete'>Supprimer</td>
                  </tr>
                ))                        
            }
          </tbody>
        </table>
      </div>
  )
}

export default Anewsletters;
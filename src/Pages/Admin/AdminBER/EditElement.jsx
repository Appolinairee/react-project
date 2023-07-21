import React from 'react';
import Button from "../../../components/Buttons/button";

const EditElement = ( {id} ) => {

    const formOnclick = (e)=>{
        e.preventDefault();
    }

  return (
    <div className="editForm updateForm">
    <h2>Mise à jour de cet événement</h2>

      <form action="" method="POST">
        <div className="flex">
            <input type="text" className="input" placeholder="Titre..."/>
            <input type="date" className="input"/>
            <input type="text" placeholder="Lieu de l'événement" className="input"  />
            <div className="inputImage">
                <label htmlFor="image">Image de l'événement</label><br />
                <input type="file" name="image" id="image"/>
            </div>
        </div>

          <Button className='button' name="Mettre à jour" onclick={formOnclick}>
              <input type="submit" />
          </Button>
      </form>
  </div>
  )
}

export default EditElement
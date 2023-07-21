import React from 'react';
import Button from "../../../components/Buttons/button";

const EditRealiElement = ( {id} ) => {

    const formOnclick = (e)=>{
        e.preventDefault();
    }

  return (
    <div className="editForm updateForm">
    <h2>Mise à jour l'article</h2>

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

          <Button className='button' name="Publier" onclick={formOnclick}>
              <input type="submit" />
          </Button>
      </form>
  </div>
  )
}

export default EditRealiElement;
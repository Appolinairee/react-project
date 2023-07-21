import React from 'react';
import Button from "../../../components/Buttons/button";

const EditBlogElement = ( {id} ) => {

    const formOnclick = (e)=>{
        e.preventDefault();
    }

  return (
    <div className="editForm updateForm">
    <h2>Mise à jour l'article</h2>

      <form action="" method="POST">
            <div className="flex">
                <input type="text" className="input" id='title' placeholder="Titre de l'article"/>

                <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>

                <div className="inputImage">
                    <label htmlFor="image">Image de l'article</label><br />
                    <input type="file" name="image" id="image" />
                </div>
            </div>

          <Button className='button' name="Mettre à jour" onclick={formOnclick}>
              <input type="submit" />
          </Button>
      </form>
  </div>
  )
}

export default EditBlogElement
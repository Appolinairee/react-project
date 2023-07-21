import React from "react";
import Partenaire1 from "../../../../assets/Bitmap (1).png";
import Partenaire2 from "../../../../assets/Bitmap (2).png";
import Partenaire3 from "../../../../assets/Bitmap (3).png";
import Partenaire4 from "../../../../assets/Bitmap (4).png";
import Partenaire5 from "../../../../assets/Bitmap.png";

const Partenaires = ()=>{

    const Partenaires = [
        {
            name: "Media Futur",
            img: Partenaire1
        },
        {
            name: "Media Futur",
            img: Partenaire2
        },
        {
            name: "Media Futur",
            img: Partenaire3
        },
        {
            name: "Media Futur",
            img: Partenaire4
        },
        {
            name: "Media Futur",
            img: Partenaire5
        }
    ]

    return(
        <div className="partenaires">
            {
                Partenaires.map((partenaire, index)=>(
                    <div key={index} className="partenaire">
                        <a href="">
                            <img src={partenaire.img} alt={partenaire.name} />
                        </a>
                    </div>
                ))
            }
        </div>
    )
}

export default Partenaires;
import React from "react";
import './blog_card.css';
import ImageBlog from "../../assets/Rectangle 17 (2).png";

const BlogCard = ()=>{
    return(
        <div className="blog_card">
            <div className="card_img">
                <img src={ImageBlog} alt="" />
            </div>

            <div className="card_info">
                <div className="card_title">
                    <p>Pas de rédaction</p>
                    <p>01/06/2023</p>
                </div>

                <h3>Titre de l'article qui ne doit pas être trop long</h3>

                <div className="cardDescription">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;
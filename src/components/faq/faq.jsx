import React, {useState} from "react";
import './faq.css';
import Arrow from "../../assets/up.png";

const Faq = (props)=>{

    const Questions = [
        {
            questionTitle: "A digital agency is a business",
            questionAnswer: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
        },
        {
            questionTitle: "A digital agency is a business",
            questionAnswer: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
        },
        {
            questionTitle: "A digital agency is a business",
            questionAnswer: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
        },
        {
            questionTitle: "A digital agency is a business",
            questionAnswer: "Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business."
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);

    return(
        <> 
            <sections className={`questions ${props.classUse}`}>
                <div className="questionsTitle">
                    <b>Faq</b>
                    <h2>Frequently Asked Questions</h2>
                    <p>A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

                    <a href="">Ask us anything</a>
                </div>

                <div className="questionsContent">
                    {
                        Questions.map((item, index)=>(
                            <div 
                                className={
                                    selectedIndex === index 
                                    ? "questionContent actif" 
                                    : "questionContent"
                                }  
                                key={index} 
                                onClick={()=>setSelectedIndex(index)} 
                            >
                                <div className="contentTitle">
                                    <h3>{item.questionTitle} </h3>

                                    <img src={Arrow} alt="Flèche de déroulement" />
                                </div>

                                <p className="answer">{item.questionAnswer} </p>
                            </div>
                        ))
                    }
                </div>
            </sections>

        </>
    )
}

export default Faq;
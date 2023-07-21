import React, {useState} from "react";
import Header from "./../Header/header";
import Main from "./Main/main";
import Build from "../BuildProject/build";
import Newsletter from "../Newsletter/newsletter";

const RealisationPage = ()=>{ 

    return(
        <section className="header">
            <Header title="Nos Réalisations" description="Agency provides a full service range including technical skills, design, business understanding." /> 

            <div id="realisations">
                <Main />
                <Build classUse='' />
                <Newsletter />
            </div>
        </section>
    )
}


export default RealisationPage;


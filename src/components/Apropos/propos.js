import React from "react";
import Header from "../Header/header";
import ProposContent from "../ProposContent/proposContent";
import ProposMain from './ProposMain/proposmain';
import Newsletter from '../Newsletter/newsletter'
import Footer from '../Footer/footer'

const Propos = ()=>{
    return(
        <> 
            <Header title="à propos" description="Agency provides a full service range including technical skills, design, business understanding." /> 
            <ProposContent />
            <ProposMain />
            <Newsletter />
        </>
    )
}

export default Propos;
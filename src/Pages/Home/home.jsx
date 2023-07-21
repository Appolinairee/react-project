import React from "react";
import Header from "../../components/HeaderHome/header";
import Realisation from "../../components/Realisations/realisation";
import About from "../../components/AboutUs/about";
import Blog from "../../components/Blog/blog";
import Events from "../../components/Events/events";
import Newsletter from "../../components/Newsletter/newsletter";

const Home = ()=>{
    return(
        <> 
            <Header />
            <Realisation />
            <About />
            <Blog />
            <Events />
            <Newsletter />
        </>
    )
}

export default Home;
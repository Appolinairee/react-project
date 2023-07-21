import React from "react";
import {BrowserRouter, Routes,  Route, Switch} from 'react-router-dom';
import './app.css';

import Navbar from "./components/NavBar/navbar";
import Home from "./Pages/Home/home";
import RealisationPage from "./components/Realisation/realisation";
import Contact from "./components/Contact/contact";
import Propos from "./components/Apropos/propos";
import Devis from "./components/Devis/devis";
import Join from "./components/JoinUs/join";
// import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Footer from "./components/Footer/footer";

import StatisticCards from './Pages/Admin/sections/AdminStats';
import Ablog from './Pages/Admin/sections/AdminBlog';
import Aevents from './Pages/Admin/sections/AdminEvent';
import Realisations from './Pages/Admin/sections/AdminRealisation';
import Anewsletters from './Pages/Admin/sections/AdminNewsletter';

const App = ()=>{
    return(
        <BrowserRouter> 
            <Navbar />

            <Routes>
            <Route path="" Component={Home} />
                <Route path="/realisations" Component={RealisationPage}/>
                <Route path="/apropos" Component={Propos}/>
                <Route path="/devis" Component={Devis}/>
                <Route path="/join" Component={Join}/>
                <Route path="/contact" Component={Contact}/>
                
                
                <Route path="/admin/" Component={StatisticCards} />
                <Route path="/admin/blog" Component={Ablog}/>
                <Route path="/admin/events" Component={Aevents} />
                <Route path="/admin/realisation" Component={Realisations}/>
                <Route path="/admin/news" Component={Anewsletters}/>
                
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}

export default App;
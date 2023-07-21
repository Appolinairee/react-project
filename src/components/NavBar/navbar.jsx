import React, {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css';
import Logo from "../../assets/LogoAlitcha.png";
import MenuBars from "../../assets/menu.png";
import MenuTimes from "../../assets/closeMenu.png";

const Navbar = ()=>{ 

    const [active, setActive] = useState('menu');
    const [overlayactive, setOverlayactive] = useState(false);

    const shownav = ()=> {
        setActive('menu menuActif');
        setOverlayactive(!overlayactive);
    }

    const removenav = ()=>{ 
        setActive('menu');
        setOverlayactive(!overlayactive);
    } 

    return(
        <section className="navbar">

                <div className="logoDiv">
                    <a href="#" className="logo">
                        <img src={Logo} alt="Logo d'Alitcha" />
                    </a>
                </div>

                <div className={active}>

                    <div className="navbarList">
                        <ul onClick={removenav} className="flex">
                            
                            <li>
                                <NavLink to="/">Accueil</NavLink>
                            </li>

                            <li>
                                <a href="#">Services</a>
                            </li>

                            <li>
                                <NavLink to="/apropos">à propos</NavLink>
                            </li>

                            <li>
                                <NavLink to="/realisations">Réalisations</NavLink>
                            </li>

                            <li>
                                <Link to="#">Blog</Link>
                            </li>

                            <li>
                                <Link to="#">Evénements</Link>
                            </li>

                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    <button className="btnForResponsive btn">
                        <NavLink to="/devis">Demander un devis</NavLink>
                    </button>

                    <img src={MenuTimes} alt="Fermeture de menu" onClick={removenav} className="navbarcloser icon" />
                </div>

                <button className="btn">
                    <NavLink to="/devis">Demander un devis</NavLink>
                </button>

                <img src={MenuBars} alt="Bars de menu" onClick={shownav} className="togglenavbar icon"/>

                <div onClick={removenav} className="navbaroverlay" style={
                    {
                        display: (overlayactive)? "block" : "none"
                    }
                }></div>
        </section>
    )
}


export default Navbar;
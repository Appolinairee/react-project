import React, {Component} from 'react';
import { Link, NavLink } from "react-router-dom";

import './AdminPage.css';
import './Sidebar.css';
import './Topbar.css';

import Logo from '../../assets/LogoAlitcha.png';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {RiComputerFill} from 'react-icons/ri';
import {BsCalendarEvent} from 'react-icons/bs';
import {FaBlog} from 'react-icons/fa';
import {AiOutlineSearch} from 'react-icons/ai';
import {CgProfile} from 'react-icons/cg';
import {AiFillSetting} from 'react-icons/ai';
import {MdNotifications } from 'react-icons/md';
import {AiOutlineMenu} from 'react-icons/ai';

class AdminPage extends Component{

  constructor(props) {
    super(props)
  
    this.state = {
      nav: 0,
      screenWidth: window.innerWidth,
    };
  }
  
  shownav = () =>{
      this.setState( {
        nav: this.state.nav? 0: 1,
      })
  }

  componentDidMount() {
    window.addEventListener('resize', ()=> this.setState({
      screenWidth: window.innerWidth
    }))
  } 

  render(){
  
    return (
        <div className='admintotal'>
          <div className='admin'>

          {/* SIDEBAR COMPONENT INCORPORATED */}
          <div className="sidebardiv">
              <div className="sidebar" style = {
                {
                  transform: (this.state.screenWidth < 900 && !this.state.nav)? "translateX(-500px)": "translateX(0px)",
                }
              }>
              

              <hr /><hr />

              <div className="menus">
                <ul className="sidebarmenu" onClick={ this.shownav }>
                  <li>
                    <NavLink to="/admin/"><RiComputerFill className='icon' />Principale</NavLink>
                    
                  </li>

                  <li>
                    <NavLink to="/admin/blog"> <FaBlog className='icon' />Blog</NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/realisation"> <RiComputerFill className='icon' />Réalisations</NavLink>
                  </li>

                  <li>
                    <NavLink to="/admin/events"> <BsCalendarEvent className='icon' />Evènements</NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/admin/news"> <BsCalendarEvent className='icon' /> Newsletters</NavLink>
                  </li>
                </ul>

                <ul className="sidebarmenu" onClick={ this.shownav }>
                  <p>Nos pages</p>
                  <li>
                    <a to="">@ <i className='icon'>@</i>Accueil</a>
                    
                  </li>

                  <li>
                    <a to="">@ A propos de nous</a>
                  </li>

                  <li>
                    <a to="">@ FAQ</a>
                  </li>

                  <li>
                    <a to="">@ Avis d'adhésion</a>
                  </li>
                  
                  <li>
                    <a to="">@ Contact</a>
                  </li>
                </ul>
              </div>

            <div className="sidebarBottom">
                <Link to="/">
                  <button>Besoin d'aide?</button>
                </Link>
                <button>Revenir sur le site</button>
            </div>
              
              <AiOutlineCloseCircle className="icon sidebarCloseBtn" onClick={ this.shownav } />

              </div>
          </div>

          {(this.state.nav === 1) && <div className="overlaybar" onClick={this.shownav}>jhuyygy</div>}

            <div className="mainAdmin">

                {/* TOPBAR COMPONENT INCORPORATED */}
                <div className='topbar flex'>
                  <div className="topbarTitle">
                      <p><span><a href="#">Pages</a></span> / Dashboard </p>
                      <b>Dashboard</b>
                  </div>

                  <div className="topbarContent flex">
                      <div className="searchInput">
                        <input type="search" placeholder='Type here...' />
                        
                        <AiOutlineSearch className='icon' />
                      </div>

                      <div className="topbarTools flex">
                        <div className='signBtn flex'>
                          <CgProfile className='icon' />
                          <p>Sign In</p>
                        </div>

                        <AiOutlineMenu className='icon menuBtn' onClick={ this.shownav } />
                        <AiFillSetting className='icon' />
                        <MdNotifications className='icon' />
                      </div>
                  </div>
                </div>

                <this.props.element />
                
            </div>
          </div>
          
          <div className='adminbackground'></div>
        </div>
    )
  }
}

export default AdminPage;
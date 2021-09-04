import './nav.css'
import React from 'react'
import { NavLink} from 'react-router-dom'
import logo from '../../Assets/Images/Hero/Header/Logotype/Logomark/Logo.png'
import app_store from '../../Assets/Images/Hero/Header/Download Badge/App Store Badge.png'
import google_play from '../../Assets/Images/Hero/Header/Download Badge/artwork.png'
function Navigator(){
    return(
        <div className='nav-back'>
            <div className='nav-left'>
                <NavLink to='/home' ><img src={logo} alt='logo' className='logo'></img></NavLink>
                <NavLink to='/home' className='title'>Landify</NavLink>
                <NavLink to='#' className="activeLink"> About </NavLink>
                <NavLink to='#' className="activeLink"> Products </NavLink>
                <NavLink to='#' className="activeLink"> Pricing </NavLink>
                <NavLink to='#' className="activeLink"> Jobs </NavLink>
                <NavLink to='#' className="activeLink"> More </NavLink>
                

            </div>
            <div className='nav-right'>
            <img src={app_store} alt='app_store' className='store'></img>
            <img src={google_play} alt='app_store' className='store'></img>


            </div>
        </div>
    )
}

export default Navigator;
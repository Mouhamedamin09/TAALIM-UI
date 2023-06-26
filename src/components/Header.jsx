import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../public/Fav-256px.jpg'

export default function Header() {
  
    
    return (
        <header className="header">
            
            <div className='logo'>
            <Link className="site-logo" to="/">
                <img src={logo} alt='logo'  width={40}/>
                <h1 className='logo-text'>TAALIM</h1>
                </Link>
             </div>
            
            <nav>
                <NavLink 
                    to="/pricing"
                    
                >
                    Pricing
                </NavLink>
                <NavLink 
                    to="/about"
                
                >
                    About
                </NavLink>
                <NavLink 
                    to="/features"
                    
                >
                    Features
                </NavLink>
                <NavLink 
                    to="/login"
                    
                >
                    Login
                </NavLink>
                <NavLink 
                    to="/register"
                    
                >
                    Register
                </NavLink>
            </nav>
        </header>
    )
}
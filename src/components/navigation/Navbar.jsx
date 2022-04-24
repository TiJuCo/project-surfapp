import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../media/icons/iconsData'
import './navbar.css'

function Navbar(props) {

    const [active, setActive] = useState(false);


    const handleHamburger = () => {
        setActive(!active)
    };

    const body = document.querySelector('body');
    active ? body.style.overflowY = "hidden" : body.style.overflowY = "initial";

    return (

        <div className="navbar-container">
            <Link to="/"><img id="logo" src={logo} onClick={handleHamburger} alt="DuckDive"/></Link>
            <nav className="navbar-desktop">
 
                    <div className="">
                        <Link to="/" onClick={handleHamburger}>Home</Link>
                        <Link to="/beaches" onClick={handleHamburger}>Beaches</Link>
                        <Link to="/news" onClick={handleHamburger}>News</Link>
                        <Link to="/info" onClick={handleHamburger}>Info</Link>
                    </div>        
            </nav>
            <button className={ active ? "burger-is-active , hamburger" : "hamburger"} onClick={handleHamburger}>
                <div className="bar"></div>
            </button>
            <nav className={ active ? "side-is-active , mobileNav" : "mobileNav"} >
                <Link to="/" onClick={handleHamburger}>Home</Link>
                <Link to="/beaches" onClick={handleHamburger}>Beaches</Link>
                <Link to="/news" onClick={handleHamburger}>News</Link>
                <Link to="/info" onClick={handleHamburger}>Info</Link>
            </nav>
        </div>
    );
}

export default Navbar;
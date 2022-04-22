import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../../media/icons/iconsData'
import './footer.css'

function Footer(props) {


    return (

        
            <footer className="footer-container">
                    <div class="footer-flex">
                        <div class="footer-1-flex">
                            <Link to="/"><img id="footer-logo" src={logo} alt="DuckDive"/></Link>
                            <span class="copyright">© 2022 Duckdive, All rights reserved</span>
                        </div>

                        <div class="footer-2-flex">
                            <div>
                                <p>Menu</p>
                                <Link to="/">Home</Link>
                                <Link to="/beaches">Beaches</Link>
                                <Link to="/news">News</Link>
                                <Link to="/info">Info</Link>
                            </div>
                            <div class="social-grid">
                                <p>Find us</p>
                                <Link to="https://github.com/TiJuCo/project-surfapp">Github</Link>
                                <Link to="https://github.com/TiJuCo/project-surfapp">Linkedin</Link>
                                <Link to="https://github.com/TiJuCo/project-surfapp">Twitter</Link> 
                            </div>
                        </div>

                        <div class="footer-3-flex">
                            <div class="social-grid">
                                <p>Find us</p>
                                <div class="social-icons-grid">
                                   
                                </div>    
                            </div>
                        </div>

                        <span class="copyright-mobile">© 2022 Duckdive, All rights reserved</span>
                    </div>
            </footer>
    );
}

export default Footer;
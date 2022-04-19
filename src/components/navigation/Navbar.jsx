import React from 'react';
import { Link } from 'react-router-dom'

function navbar(props) {
    return (
        <div>
            <nav>
                <img id="logo" src="/src/media/icons/MaCheFai_logo.svg" alt="DuckDive">


                <div className="is-active">
                    <Link to="/index">Home</Link>
                    <Link to="/beaches">Beaches</Link>
                    <Link to="/news">News</Link>
                    <Link to="/info">Info</Link>
                </div>

                <button>
                    <div class="bar"></div>
                </button>
            
            </nav>
        </div>
    );
}

export default navbar;
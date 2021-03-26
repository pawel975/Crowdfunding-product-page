import React from 'react';
import './NavBar.css'

function NavBar(props) {
    const { click, isLogoActive, isHamburgerActive } = props;
    return (
        <nav className="nav-bar">
            <ul>
                {isLogoActive ?
                    <li className="logo"><span className="logo-span"></span></li>
                    : null
                }
                {isHamburgerActive ?
                    <li onClick={click} className="hamburger-span"></li>
                    : null}
                <li className="nav-option"><a href="$">About</a></li>
                <li className="nav-option"><a href="$">Discover</a></li>
                <li className="nav-option"><a href="$">Get Started</a></li>

            </ul>
        </nav>
    )
}

export default NavBar;
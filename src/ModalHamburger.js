import React from 'react';
import './ModalHamburger.css'
function ModalHamburger(props) {
    const { click } = props
    return (
        <>
            <div onClick={click} className="hamburger-background"></div>
            <div className="hamburger-container">
                <span className="logo"></span>
                <span onClick={click} className="close"></span>
                <ul className="hamburger-ul">
                    <li><a href="$">About</a></li>
                    <hr />
                    <li><a href="$">Discover</a></li>
                    <hr />
                    <li><a href="$">Get Started</a></li>


                </ul>
            </div>
        </>
    )
}

export default ModalHamburger;

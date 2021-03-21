import React from 'react';
import './About.css';
import Pledge from './Pledge';

function About(props) {

    const packages = props.packages.map(item => (
        <Pledge id={item.id} click={props.click} key={item.id} name={item.name} pledge={item.pledge} description={item.description} amount={item.amount} />
    ))
    return (
        <div className="about-container">
            <h1>About this project</h1>
            <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <br />
            <p>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
            to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            {packages}
        </div>


    )
}

export default About;
import React from 'react';
import './Title.css'

function Title(props) {
    return (
        <div className="title-container">
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <h4>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</h4>
            <button onClick={props.click}>Back this project</button>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider round">
                </span>
            </label>
        </div >
    )
}

export default Title
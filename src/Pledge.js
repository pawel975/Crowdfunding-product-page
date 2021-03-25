import React from 'react';
import './Pledge.css';

function Pledge({ name, pledge, description, amount, click, id }) {

    return (

        <div id={id} className={`pledge-container ${amount > 0 ? null : "pledge-disabled"}`}>
            <h1>{name}</h1>
            <h2>{pledge}</h2>
            <p>{description}</p>
            <span><strong style={{ marginRight: "0.2em" }}>{amount}</strong>left</span>
            <button
                disabled={amount > 0 ? false : true}
                onClick={click}>{amount > 0 ? "Select reward" : "Out of stock"}
                </button>
        </div>
    )
}

export default Pledge
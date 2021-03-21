import React, { useEffect } from 'react';
import './Counters.css';


function Counters(props) {

    const { cashBacked, totalBackers } = props;

    let progress = (props.cashBacked * 100) / 100000

    useEffect(() => {
        document.documentElement.style.setProperty('--width', progress)
    }, [progress]);

    return (
        <div className="counters-container">
            <div className="counter">
                <span className="total">{`$${cashBacked}`}</span>
                <p>of $100,000 backed</p>
            </div>
            <hr />
            <div className="counter">
                <span className="total">{totalBackers}</span>
                <p>total backers</p>
            </div>
            <hr />
            <div className="counter">
                <span className="total">56</span>
                <p>days left</p>
            </div>
            <div className="progress-bar" >
            </div>
        </div >
    )
}

export default Counters
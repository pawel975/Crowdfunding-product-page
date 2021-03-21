import React from 'react';
import './ModalPurchase.css';
import ModalPledge from './ModalPledge.js';

function ModalPurchase(props) {
    const modalPackages = props.packages.map(item => (
        <ModalPledge state={props.state} stateSetter={props.stateSetter} id={item.id} key={item.id} name={item.name} pledge={item.pledge} description={item.description} amount={item.amount} price={item.price} />
    ))
    return (
        <>
            <div onClick={props.click} className="purchase-background"></div>
            <div className="purchase-container">
                <div className='header'>
                    <h1>Back this project</h1>
                    <span onClick={props.click}></span>
                </div>
                <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                <div>{modalPackages}</div>
            </div>
        </>
    )
}

export default ModalPurchase;
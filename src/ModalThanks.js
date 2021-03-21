import React from 'react';
import './ModalThanks.css'

function ModalThanks(props) {
    const { click } = props
    return (
        <>
            <div onClick={click} className="modal-thanks"></div>
            <div className="modal-thanks-message">
                <img className="check-image" src="" alt="" />
                <h1>Thanks for your support!</h1>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
        Got it!</p>
                <button onClick={click}>Got it!</button>
            </div>
        </>
    )
}

export default ModalThanks;
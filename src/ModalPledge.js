import React, { useEffect, useRef, useState } from 'react';
import './ModalPledge.css';

function ModalPledge(props) {

    const { state, stateSetter, id, name, pledge, description, amount, price } = props


    const [donation, setDonation] = useState(() => price)

    const handleDonation = (e) => {
        const donationAmount = Number(e.target.value)
        setDonation(donationAmount)
    }

    const handleReward = (e) => {
        if(donation < price) return alert(`The minimum pledge is ${price}`)
        const pledge = Number(e.target.parentNode.parentNode.id)
        const tempPledges = [...state.packages]
        stateSetter({
            ...state,
            packages: tempPledges.map(item => {
                if (item.id === pledge) {
                    return {
                        ...item,
                        amount: item.amount - 1
                    }
                } else {
                    return item
                }
            }),
            modalPurchaseActive: false,
            modalThanksActive: true,
            cashBacked: state.cashBacked + donation,
            totalBackers: state.totalBackers + 1,
        })
    }

    const [checkArray, setCheckArray] = useState([]);
    
    const [border, setBorder] = useState(false)

    const inputChecked = useRef()

    const handleBorder = () => {
     setBorder(!border) 
     console.log(inputChecked.current)
    }

    return (
        <div className={`modal-wrap
        ${border && inputChecked.current.checked? "active " : null}`}
        >
            <div className={`modal-pledge-container ${amount > 0 ? null : "modal-pledge-disabled"}`}>
                <input 
                    ref={inputChecked}
                    onClick={handleBorder}
                    type="radio"
                    className="radio-button"
                    name="choose-pledge"
                    id="choose-pledge"
                    disabled={amount > 0 ? false : true}
                    // checked={border}
                />
                <label htmlFor="choose-pledge">
                <h1>{name}</h1>
                    </label>
                <h2>{pledge}</h2>
                <p>{description}</p>
                <span><strong style={{ margin: "0 0.2em" }}>{amount}</strong>left</span>
            </div>
 
            <div id={id} className={`setPledge ${amount > 0 ? null : "modal-pledge-disabled"} ${border? "display-pledge" : null}`}>
                    <h1>Enter your pledge</h1>
                    <input 
                        onChange={handleDonation} 
                        type="number" 
                        placeholder={`$ ${price}`} 
                        min={price} 
                    />
                    <button onClick={handleReward}>Continue</button>
            </div>

        </div>
    )
}

export default ModalPledge;
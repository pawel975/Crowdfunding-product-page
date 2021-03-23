import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import Title from './Title';
import Counters from './Counters';
import About from './About';
import ModalThanks from './ModalThanks';
import ModalPurchase from './ModalPurchase';
import ModalHamburger from './ModalHamburger';

function App() {

  const [state, setState] = useState({
    packages: [
      {
        id: 0,
        name: "Bamboo Stand",
        pledge: "Pledge $25 or more",
        description: `You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
        you’ll be added to a special Backer member list.`,
        amount: 101,
        price: 25,
      },
      {
        id: 1,
        name: "Black Edition Stand",
        pledge: "Pledge $75 or more",
        description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
        member list. Shipping is included.`,
        amount: 64,
        price: 75,
      },
      {
        id: 2,
        name: "Mahogany Special Edition",
        pledge: "Pledge $200 or more",
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
        to our Backer member list. Shipping is included.`,
        amount: 0,
        price: 200,
      },
    ],

    modalThanksActive: false,
    modalPurchaseActive: false,
    ModalHamburgerActive: false,
    isLogoActive: true,
    isHamburgerActive: true,
    cashBacked: 89914,
    totalBackers: 5007,


  })

  const handleModalClose = (e) => {
    if (e.target === <button /> || <div />) {
      setState(prevState => ({
        ...prevState,
        modalThanksActive: false,
        modalPurchaseActive: false,
        ModalHamburgerActive: false,
        isLogoActive: true,
        isHamburgerActive: true,
      }))
    } else {
      return
    }
  }

  const handlePurchase = () => {
    setState(prevState => ({
      ...prevState,
      modalPurchaseActive: true,
    }))
  }


  const handleModalThanks = (e) => {
    const pledge = Number(e.target.parentNode.id)
    const tempPledges = [...state.packages]
    let price = 0
    if (pledge === 0) {
      price = 25
    } else if (pledge === 1) {
      price = 75
    }

    setState({
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
      cashBacked: state.cashBacked + price,
      totalBackers: state.totalBackers + 1,
    })

  }

  const handleHamburgerOpen = () => {
    setState(prevState => ({
      ...prevState,
      ModalHamburgerActive: true,
      isLogoActive: false,
      isHamburgerActive: false,
    }))
  }

  return (
    <div className="app">
      <NavBar click={handleHamburgerOpen} isLogoActive={state.isLogoActive} isHamburgerActive={state.isHamburgerActive} />
      <Title click={handlePurchase} />
      <Counters cashBacked={state.cashBacked} totalBackers={state.totalBackers} />
      <About click={handleModalThanks} packages={state.packages} />
      {state.modalThanksActive ? <ModalThanks click={handleModalClose} /> : null}
      {state.modalPurchaseActive ? <ModalPurchase state={state} stateSetter={setState} click={handleModalClose} packages={state.packages} /> : null}
      {state.ModalHamburgerActive ? <ModalHamburger click={handleModalClose} /> : null}
    </div>
  );
}

export default App;

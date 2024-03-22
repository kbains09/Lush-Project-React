import React, { useState } from 'react';
import tap from '../../assets/images/contactless-card.png';
import './CheckoutActions.scss';

const CheckoutActions = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State to hold the message for the user

  const handleConfirmPurchase = () => {
    console.log('Confirming with email:', email); //test 
    setMessage('Your confirmation is complete.'); // ui message
  };

  const handleSubscribe = () => {
    console.log('Subscribing:', email); //test 
    setMessage('Subscription successful.'); // ui message
  };

  const handleReceiptOption = (option) => {
    console.log('Receipt option selected:', option); //test
    setMessage(`Receipt option '${option}' selected.`); // ui message
  };

  return (
    <div className="checkout-actions">
      <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
      <div className="buttons-inline">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      <img src={tap} alt="payment" className="payment-image" />
      <div className="receipt-options">
        <button onClick={() => handleReceiptOption('Email')}>Email Receipt</button>
        <button onClick={() => handleReceiptOption('Print')}>Print Receipt</button>
        <button onClick={() => handleReceiptOption('Both')}>Both</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CheckoutActions;

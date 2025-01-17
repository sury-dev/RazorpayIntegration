import React, { useState } from 'react';
import { processPayment } from './utility/Razorpay';
import './App.css';

function App() {
  const [amount, setAmount] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="header">
          <h1>
            <span className="northern">NORTHERN</span> DELIGHT
          </h1>
          <p>Experience the joy of seamless transactions with RazorPay.</p>
        </div>

        <div className="payment-section">
          <label className="amount-label">Enter Amount</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            className="amount-input"
            placeholder="Enter amount ($)"
          />
          <button className="pay-button" disabled={!amount} onClick={() => processPayment(amount)}>
            Pay {amount ? `Rs ${amount}` : 'Amount'} to NORTHERN DELIGHT
          </button>
        </div>
      </div>

      <footer className={`footer ${amount ? 'show-footer' : ''}`}>
        <p>Thank you for choosing NORTHERN DELIGHT!</p>
      </footer>
    </div>
  );
}

export default App;

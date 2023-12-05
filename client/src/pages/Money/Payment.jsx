import React, { useState } from 'react';

const Payment = () => {
    const [balance, setBalance] = useState(1000); // Initial balance
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState(null);

    const handleTransaction = () => {
        if (transactionType === 'deposit') {
            setBalance(balance + amount);
        } else if (transactionType === 'withdraw' && balance >= amount) {
            setBalance(balance - amount);
        } else {
            alert('Insufficient balance for withdrawal');
        }
        setAmount(0); // Reset amount after transaction
    };

    return (
        <div>
            <h2>Current Balance: ${balance}</h2>
            <div>
                <button onClick={() => setTransactionType('deposit')}>Deposit</button>
                <button onClick={() => setTransactionType('withdraw')}>Withdraw</button>
            </div>
            {transactionType && (
                <div>
                    <h3>{transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}</h3>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        placeholder="Enter amount"
                    />
                    <button onClick={handleTransaction}>Submit</button>
                </div>
            )}
        </div>
    );
};

export default Payment;
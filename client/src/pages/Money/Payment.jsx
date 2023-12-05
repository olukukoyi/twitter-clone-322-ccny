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
        <div style={styles.container}>
            <div style={styles.balanceBubble}>Current Balance: ${balance}</div>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => setTransactionType('deposit')}>Deposit</button>
                <button style={styles.button} onClick={() => setTransactionType('withdraw')}>Withdraw</button>
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
                    <button style={styles.button} onClick={handleTransaction}>Submit</button>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#ADD8E6', // light blue
        height: '100vh',
        justifyContent: 'center',
    },
    balanceBubble: {
        padding: '20px',
        fontSize: '32px',
        borderRadius: '50%',
        backgroundColor: '#90EE90', // light green
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '200px',
        marginTop: '20px',
    },
    button: {
        backgroundColor: '#FFFFFF', // white
        border: 'none',
        borderRadius: '12px',
        padding: '10px 20px',
        cursor: 'pointer',
    },
};

export default Payment;

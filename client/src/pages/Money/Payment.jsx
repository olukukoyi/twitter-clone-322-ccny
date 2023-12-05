import React, { useState, useEffect } from 'react';

const Payment = () => {
    const [balance, setBalance] = useState(1000);
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState(null);

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                // Simulating a backend response
                const response = await fetch('/api/payment'); // replace with your actual endpoint
                const paymentData = await response.json();

                // Setting state with fetched payment data
                setBalance(paymentData.balance);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchPaymentData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const handleTransaction = async () => {
        try {
            const response = await fetch('/api/payment/transaction', {
                method: 'POST', // or 'PUT' based on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    transactionType,
                    amount,
                }),
            });

            if (response.ok) {
                const newBalance = await response.json();
                setBalance(newBalance);
                alert('Transaction successful!');
            } else {
                alert('Transaction failed');
            }
        } catch (error) {
            console.error('Error processing transaction:', error);
            alert('Transaction failed');
        }

        setAmount(0); // Reset amount after transaction
    };

    return (
        <div style={styles.container}>
            <div style={styles.balanceBubble}>Current Balance: ${balance}</div>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => setTransactionType('deposit')}>
                    Deposit
                </button>
                <button style={styles.button} onClick={() => setTransactionType('withdraw')}>
                    Withdraw
                </button>
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
                    <button style={styles.button} onClick={handleTransaction}>
                        Submit
                    </button>
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

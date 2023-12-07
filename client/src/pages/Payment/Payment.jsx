import React, { useState, useEffect } from 'react';

const Payment = () => {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState(null);

    useEffect(() => {
        const fetchPaymentData = async () => {
            try {
                // Fetch payment data from the backend
                const response = await fetch('http://localhost:8001/api/payment');
                const paymentData = await response.json();

                // Setting state with fetched payment data
                setBalance(paymentData.balance);
            } catch (error) {
                console.error('Error fetching payment data:', error);
            }
        };

        fetchPaymentData();
    }, []);

    const handleTransaction = async () => {
        try {
            if (transactionType === 'withdraw' && amount > balance) {
                alert('Insufficient funds. Cannot withdraw more than the current balance.');
                return;
            }

            const response = await fetch('http://localhost:8001/api/payment/transaction', {
                method: 'POST',
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

        setAmount(0);
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
                        type="range"
                        min="0"
                        max={balance}
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                    />
                    <div style={styles.amountLabel}>Amount: ${amount}</div>
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
        backgroundColor: '#ffffff',
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
        backgroundColor: '#ADD8E6', // white
        border: 'none',
        borderRadius: '12px',
        padding: '10px 20px',
        cursor: 'pointer',
    },
    amountLabel: {
        marginTop: '10px',
        marginBottom: '20px',
        fontSize: '16px',
    },
};

export default Payment;

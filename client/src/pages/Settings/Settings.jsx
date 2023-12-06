import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('normal');
    const [bankAccount, setBankAccount] = useState('');

    // Simulating fetching user data from a backend
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Simulating a backend response
                const response = await fetch('/api/user'); // replace with your actual endpoint
                const userData = await response.json();

                // Setting state with fetched user data
                setUsername(userData.username);
                setEmail(userData.email);
                // Password is usually not fetched from the server for security reasons
                // If you need to display some information about the password, consider not fetching it from the server
                // and let the user update it separately if needed.

                setAccountType(userData.accountType);
                setBankAccount(userData.bankAccount);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const handleSave = async () => {
        try {
            // TODO: link with backend to update user data
            const response = await fetch('/api/user', {
                method: 'PUT', // or 'POST' based on your API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    accountType,
                    bankAccount,
                }),
            });

            if (response.ok) {
                alert('Settings saved!');
            } else {
                alert('Failed to save settings');
            }
        } catch (error) {
            console.error('Error saving user data:', error);
            alert('Failed to save settings');
        }
    };

    const handleDeleteAccount = async () => {
        try {
            // TODO: link with backend to delete user account
            const response = await fetch('/api/user', {
                method: 'DELETE',
            });

            if (response.ok) {
                alert('Account deleted!');
            } else {
                alert('Failed to delete account');
            }
        } catch (error) {
            console.error('Error deleting user account:', error);
            alert('Failed to delete account');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Settings</h2>
            <label>
                Update Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: {/* Consider not displaying the password for security reasons */}
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Account Type:
                <select value={accountType} onChange={(e) => setAccountType(e.target.value)}>
                    <option value="normal">Normal</option>
                    <option value="corporate">Corporate</option>
                </select>
            </label>
            <label>
                Bank Account:
                <input type="text" value={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
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
};

export default Settings;

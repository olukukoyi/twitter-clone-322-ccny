import React, { useState, useEffect } from 'react';

const Settings = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [accountType, setAccountType] = useState('normal');
    const [bankAccount, setBankAccount] = useState('');
    const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);

    // Simulating fetching user data from a backend
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Simulating a backend response
                const response = await fetch('/api/user'); // replace with your actual endpoint
                const userData = await response.json();

                // Setting state with fetched user data
                setUsername(userData.username);
                // Password is usually not fetched from the server for security reasons
                // If you need to display some information about the password, consider not fetching it from the server
                // and let the user update it separately if needed.
                setEmail(userData.email);
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

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setSelectedProfilePicture(file);
    };

    const handleUploadProfilePicture = async () => {
        try {
            if (selectedProfilePicture) {
                // TODO: Add logic to upload the profile picture to the server
                alert('Profile picture uploaded!');
            } else {
                alert('Please select a profile picture');
            }
        } catch (error) {
            console.error('Error uploading profile picture:', error);
            alert('Failed to upload profile picture');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            height: '100vh',
            justifyContent: 'center',
        },
    };

    return (
        <div style={styles.container}>
            <style>
                {`
          h2 {
            font-size: 2rem;
            margin-bottom: 20px;
          }

          label {
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
          }

          input,
          select {
            width: 300px;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          button {
            width: 320px;
            padding: 12px;
            background-color: #1da1f2;
            color: white;
            border: none;
            border-radius: 20px;
            cursor: pointer;
            margin-top: 15px;
          }

          button:hover {
            background-color: #0d8ecf;
          }
        `}
            </style>
            <h2>Settings</h2>
            <label>
                Update Username:
                <input type="text" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Password: {/* Consider not displaying the password for security reasons */}
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
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
                <input type="text" defaultValue={bankAccount} onChange={(e) => setBankAccount(e.target.value)} />
            </label>
            <label>
                Change Profile Picture:
                <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
            </label>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
            <button onClick={handleUploadProfilePicture}>Upload Profile Picture</button>
        </div>
    );
};

export default Settings;

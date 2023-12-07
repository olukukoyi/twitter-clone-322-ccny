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
                const response = await fetch('http://localhost:8001/user/:id'); // Update with your actual endpoint
                const userData = await response.json();

                // Setting state with fetched user data
                setUsername(userData.username);
                setEmail(userData.email);
                setAccountType(userData.accountType);
                setBankAccount(userData.bankAccount);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleSave = async () => {
        try {
            const response = await fetch('http://localhost:8001/user/:id', {
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

            // Handle response...
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            const response = await fetch('http://localhost:8001/user/:id', {
                method: 'DELETE',
            });

            // Handle response...
        } catch (error) {
            console.error('Error deleting user account:', error);
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
            fontFamily: 'Segoe UI, sans-serif',
        },
        heading: {
            fontSize: '2rem',
            marginBottom: '20px',
        },
        formLabel: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '15px',
        },
        formInput: {
            width: '300px',
            padding: '10px',
            marginTop: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontFamily: 'Segoe UI, sans-serif',
        },
        formSelect: {
            width: '300px',
            padding: '10px',
            marginTop: '5px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontFamily: 'Segoe UI, sans-serif',
        },
        formButton: {
            width: '320px',
            padding: '12px',
            backgroundColor: '#1da1f2',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            marginTop: '15px',
            fontFamily: 'Segoe UI, sans-serif',
        },
        formButtonHover: {
            backgroundColor: '#0d8ecf',
        },
    };

    return (
        <div style={styles.container}>
            <style>
                {`
          h2 {
            font-size: 2rem;
            margin-bottom: 20px;
            font-family: 'Segoe UI', sans-serif; // Using Segoe UI font for heading
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
            font-family: 'Segoe UI', sans-serif; // Using Segoe UI font for input and select
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
            font-family: 'Segoe UI', sans-serif; // Using Segoe UI font for buttons
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
            <button onClick={handleUploadProfilePicture}>Upload Profile Picture</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleDeleteAccount}>Delete Account</button>
        </div>
    );
};

export default Settings;

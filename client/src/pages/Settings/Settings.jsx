import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('normal');
  const [bankAccount, setBankAccount] = useState('');

  // Simulating fetching user data from a backend
  useEffect(() => {
    // Replace this with an actual API call to get user data
    const fetchUserData = async () => {
      try {
        // Simulating a backend response
        const response = await fetch('/api/user'); // replace with your actual endpoint
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
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleSave = () => {
    // TODO: link with backend
    alert('Settings saved!');
  };

  const handleDeleteAccount = () => {
    // TODO: link with backend
    alert('Account deleted!');
  };

  return (
      <div style={styles.container}>
        <h2>Settings</h2>
        <label>
          Update Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
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

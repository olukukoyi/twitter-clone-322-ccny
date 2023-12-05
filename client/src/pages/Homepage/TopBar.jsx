// TopBar.js
import React from 'react';
import { faHome, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TopBar = () => {
    return (
        <div style={styles.topBar}>
            <div style={styles.leftSection}>
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
            </div>
            <div style={styles.centerSection}>
                <input style={styles.input} type="text" placeholder="Search Twitter" />
            </div>
            <div style={styles.rightSection}>
                <FontAwesomeIcon icon={faBell} />
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </div>
    );
};

const styles = {
    topBar: {
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e1e8ed',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 16px',
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
    },
    centerSection: {
        flex: 1,
        margin: '0 16px',
    },
    input: {
        width: '100%',
        padding: '8px',
        borderRadius: '20px',
        border: '1px solid #e1e8ed',
        outline: 'none',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
    },
};

export default TopBar;

import React from 'react';

const TopNavigationBar = () => {
    const navBarStyle = {
        backgroundColor: '#1da1f2',
        padding: '10px',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        gridColumnGap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2rem 0',
    };

    const logoStyle = {
        marginLeft: '1rem',
        width: '30px',
    };

    const searchBarContainerStyle = {
        position: 'relative',
        marginRight: '1rem',
    };

    const searchBarStyle = {
        width: '100%',
        padding: '8px',
        border: 'none',
        borderRadius: '20px',
        marginLeft: '2rem',
    };

    const navLinksStyle = {
        display: 'flex',
        gap: '10px',
        borderRight: '2px solid #ccc',
        padding: '0 1rem',
    };

    const navLinkItemStyle = {
        color: '#fff',
        textDecoration: 'none',
    };

    const profileStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const profileImageStyle = {
        width: '30px',
        borderRadius: '50%',
        marginRight: '5px',
    };

    const profileNameStyle = {
        fontWeight: 'bold',
    };

    return (
        <nav style={navBarStyle}>
            <div style={logoStyle}>
                <img src="twitter-logo.png" alt="Twitter Logo" />
            </div>
            <div style={searchBarContainerStyle}>
                <input type="text" placeholder="Search Twitter" style={searchBarStyle} />
            </div>
            <div style={navLinksStyle}>
                <a href="#" style={navLinkItemStyle}>
                    Home
                </a>
                <a href="#" style={navLinkItemStyle}>
                    Explore
                </a>
                <a href="#" style={navLinkItemStyle}>
                    Notifications
                </a>
                <a href="#" style={navLinkItemStyle}>
                    Messages
                </a>
            </div>
            <div style={profileStyle}>
                <img src="profile-picture.jpg" alt="Profile" style={profileImageStyle} />
                <span style={profileNameStyle}>John Doe</span>
            </div>
        </nav>
    );
};

export default TopNavigationBar;
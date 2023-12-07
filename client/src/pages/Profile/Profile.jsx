import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('tweets');
  const [userData, setUserData] = useState({
    username: '',
    bio: '',
    profilePicture: '',
    tweets: [],
    replies: [],
    media: [],
    ads: [],
    following: 0,
    followers: 0,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8001/user/:id');
        const userDataFromBackend = await response.json();

        setUserData(userDataFromBackend);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'tweets':
        return userData.tweets.map((tweet, index) => (
            <div key={index} style={styles.contentItem}>
              {tweet}
            </div>
        ));
      case 'replies':
        return userData.replies.map((reply, index) => (
            <div key={index} style={styles.contentItem}>
              {reply}
            </div>
        ));
      case 'media':
        return userData.media.map((media, index) => (
            <div key={index} style={styles.contentItem}>
              {media}
            </div>
        ));
      case 'ads':
        return userData.ads.map((ad, index) => (
            <div key={index} style={styles.contentItem}>
              {ad}
            </div>
        ));
      case 'following':
        return <div style={styles.contentItem}>Following: {userData.following}</div>;
      case 'followers':
        return <div style={styles.contentItem}>Followers: {userData.followers}</div>;
      default:
        return null;
    }
  };

  return (
      <div style={styles.container}>
        <div style={styles.profileInfo}>
          <img src={userData.profilePicture} alt="Profile" style={styles.profilePicture} />
          <div style={styles.profileDetails}>
            <h2>{userData.username}</h2>
            <p>{userData.bio}</p>
          </div>
        </div>
        <div style={styles.navBar}>
          {['tweets', 'replies', 'media', 'ads', 'following', 'followers'].map((section) => (
              <div
                  key={section}
                  style={activeSection === section ? styles.activeNavItem : styles.navItem}
                  onClick={() => handleSectionClick(section)}
              >
                {section}
              </div>
          ))}
        </div>
        <div style={styles.content}>{renderContent()}</div>
      </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  profileInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  profileDetails: {
    textAlign: 'left',
  },
  navBar: {
    display: 'flex',
    marginBottom: '20px',
  },
  navItem: {
    padding: '10px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  activeNavItem: {
    padding: '10px',
    cursor: 'pointer',
    marginRight: '10px',
    borderBottom: '2px solid #1B95E0', // Active section color
  },
  content: {
    width: '100%',
  },
  contentItem: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px',
    padding: '10px',
  },
};

export default ProfilePage;

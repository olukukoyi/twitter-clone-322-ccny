import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8001/user/:id'); // Replace ':id' with the actual user ID
        const fetchedUserData = await response.json();
        setUserData(fetchedUserData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowImagePopup(true);
  };

  const handlePopupClose = () => {
    setShowImagePopup(false);
  };

  const handleImageChange = () => {
    console.log('Change image functionality');
  };

  return (
      <div>
        <div style={styles.backgroundImageContainer} onClick={() => handleImageClick(userData.backgroundImage)}>
          <div style={styles.profileInfoContainer}>
            <img
                src={userData.profilePicture}
                alt="Profile"
                style={styles.profilePicture}
                onClick={() => handleImageClick(userData.profilePicture)}
            />
            <div style={styles.profileDetails}>
              <h2>{userData.username}</h2>
              <p>{userData.bio}</p>
              <div style={styles.stats}>
                <div>{userData.tweetCount} Tweets</div>
                <div>{userData.followers} Followers</div>
                <div>{userData.following} Following</div>
                <div>{userData.ads} Ads</div>
              </div>
            </div>
          </div>
        </div>

        {userData.tweets.map((tweet) => (
            <div key={tweet.id} style={styles.tweetContainer}>
              <p>{tweet.content}</p>
            </div>
        ))}

        {showImagePopup && (
            <div style={styles.imagePopup}>
          <span style={styles.closeButton} onClick={handlePopupClose}>
            &times;
          </span>
              <img src={selectedImage} alt="Popup" style={styles.popupImage} />
              <div style={styles.changeImageButton} onClick={handleImageChange}>
                Change Image
              </div>
            </div>
        )}
      </div>
  );
};

const styles = {
  backgroundImageContainer: {
    height: '50vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
  },
  profilePicture: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  profileDetails: {
    marginTop: '10px',
  },
  stats: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  tweetContainer: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '10px',
    padding: '10px',
  },
  imagePopup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    zIndex: 1000,
    cursor: 'pointer',
  },
  popupImage: {
    maxWidth: '100%',
    maxHeight: '80vh',
    borderRadius: '8px',
  },
  changeImageButton: {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    cursor: 'pointer',
    color: '#1B95E0',
  },
};

export default ProfilePage;

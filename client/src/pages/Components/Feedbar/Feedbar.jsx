import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import PropTypes from 'prop-types';
import Tweet from '../CreatePost/Post.jsx';
import './Feedbar.css';



const Feedbar = (title) => {
    const [newPostContent, setNewPostContent] = useState('');
    const [image, setImage] = useState(null);

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('body', newPostContent);
        formData.append('image', image);

        const response = await fetch('http://localhost:8001/post/createPost', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: formData
        });

        setNewPostContent('');
        setimage(null);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };

    return (
        <div className="feed">
            <header className='feed-header'>
                <h2>Home</h2>
            </header>
            <div className="new-post-form">
                <form onSubmit={handlePostSubmit}>
                    <textarea
                        placeholder="What's happening?"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    );
};




export default Feedbar;

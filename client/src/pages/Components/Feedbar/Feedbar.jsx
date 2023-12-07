import React, { useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import Cookies from 'js-cookie'; 
import './Feedbar.css';



const Feedbar = () => {
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostContent, setNewPostContent] = useState('');
    const [image, setImage] = useState(null);

    const userId = Cookies.get('userid');

    const handlePostSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', newPostTitle);
        formData.append('body', newPostContent);
        formData.append('userId', userId);
        //formData.append('image', image);

        const response = await fetch('http://localhost:8001/post/createPost', {
            method: 'POST',
            credentials: 'include',
            body: formData
        });

        setNewPostTitle('');
        setNewPostContent('');
        setImage(null);
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
                    <input
                        type='text'
                        placeholder="Title"
                        value={newPostTitle}
                        onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="What's happening?"
                        value={newPostContent}
                        onChange={(e) => setNewPostContent(e.target.value)}
                    />
                    
                    <div className='new-post-icons'>
                        {/* <label className="image-upload">
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            <ImageIcon fontSize="medium" />
                        </label> */}
                        <button type="submit">Post</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};




export default Feedbar;

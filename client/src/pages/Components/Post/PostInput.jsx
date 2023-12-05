import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TweetInput({ onTweet }) {
    console.log('Rendering TweetInput');
    const [tweet, setTweet] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting tweet:', tweet);
        onTweet(tweet);
        setTweet('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
            />
            <button type="submit">Tweet</button>
        </form>
    );
}

TweetInput.propTypes = {
    onTweet: PropTypes.func.isRequired,
};

export default TweetInput;

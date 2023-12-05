import React from 'react';
import Feed from './Feed.jsx';
import TweetInput from './TweetInput.jsx';
import Sidebar from './Sidebar.jsx';
import './HomePage.css';

function HomePage() {
    // TODO: Replace with actual data
    const tweets = ['Tweet1', 'Tweet2', 'Tweet3'];
    const trendingUsers = [
        { username: 'User1' },
        { username: 'User2' },
        { username: 'User3' },
    ];

    const handleTweet = (tweet) => {
        console.log('New tweet:', tweet);
        // TODO: logic to handle new tweet
    };

    return (
        <div className="homepage">
            <div className="tweet-input">
                <TweetInput onTweet={handleTweet} />
            </div>
            <div className="feed">
                <Feed tweets={tweets} />
            </div>
            <div className="sidebar">
                <Sidebar trendingUsers={trendingUsers} />
            </div>
        </div>
    );
}

export default HomePage;

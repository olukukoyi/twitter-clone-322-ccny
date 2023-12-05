
import React from 'react';
import TweetInput from '../Components/Post/TweetInput.jsx';
//import Navbar from '../Components/Navbar/Navbar.jsx';

import Leftbar from '../Components/Leftbar/Leftbar.jsx';
import Rightbar from '../Components/Rightbar/Rightbar.jsx';
import Feed from '../Components/Feed/Feed.jsx';
import './Homepage.css';



const Homepage = () => {
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
            <div className="leftbar">
                <Leftbar />
            </div>

            <div className="feed">
                <Feed tweets={tweets} />
            </div>
            
            <div className='rightbar'>
                <Rightbar trendingUsers={trendingUsers} />
            </div>

            {/* 
            
            <div className="tweet-input">
                <TweetInput onTweet={handleTweet} />
            </div>
            
             */}
            
        </div>
    );
}

export default Homepage;
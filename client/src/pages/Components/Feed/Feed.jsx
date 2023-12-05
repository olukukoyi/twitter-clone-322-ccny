import React from 'react';
import PropTypes from 'prop-types';
import Tweet from '../Post/Tweet.jsx';
import './Feed.css';


const Feed = () => {
    return (
        <div className="feed">
            Feed
        </div>
    );
};


// // TODO: Make such that top relevent tweets show, ie. tweets from following and trendy
// function Feed({ tweets }) {
//     console.log('Rendering Feed with tweets:', tweets);
//     return (
//         <div>
//             {tweets.map((tweet, index) => (
//                 <Tweet key={index} tweet={tweet} />
//             ))}
//         </div>
//     );
// }

// Feed.propTypes = {
//     tweets: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

export default Feed;

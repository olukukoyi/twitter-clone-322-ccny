import React from 'react';
import PropTypes from 'prop-types';

function Tweet({ tweet }) {
    console.log('Rendering Tweet:', tweet);
    return <p>{tweet}</p>;
}

Tweet.propTypes = {
    tweet: PropTypes.string.isRequired,
};

export default Tweet;

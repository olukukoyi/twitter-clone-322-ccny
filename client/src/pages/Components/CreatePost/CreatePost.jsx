import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./CreatePost.css";

const CreatePost = ({ onTweet })  => {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState('');
    
    console.log('Rendering TweetInput');
    

    // const handleSetText = (inputText) => {
    //     inputText.preventDefault();
    //     setText(inputText);

    //     wordCount = inputText.trim().split(/\s+/),length;
    //     setWordCount(wordCount);
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log('Submitting post:', tweet);
    //     onTweet(tweet);
    //     setTweet('');
    // };



    return (
        <div className='newpost'>
            <div className='textbox'>
                <form>
                    <input
                        type="text"
                        value={text}
                        // onChange={(e) => handleSetText(e.target.value)}
                        placeholder="What's going on?!"
                    />
                    {/* <button type="submit" className='post-button' onClick={(e) =>  {handleSubmit}}>Tweet</button> */}
                </form>
            </div>
        </div>
    );
}

// TweetInput.propTypes = {
//     onTweet: PropTypes.func.isRequired,
// };

export default CreatePost;


import React from 'react';
import { Link } from "react-router-dom";
import {
    Home as CottageIcon,
    Person as PersonIcon,
    Search as SearchIcon,

} from '@mui/icons-material';
import './Rightbar.css';


const Rightbar = ({ trendingUsers }) => {
    return (
    <div className="rightbar">
        <div className='searchbar'>
            search
        </div>
        <div>
            trendy posts
        </div>
        <div className='trendy-users'>
            <h2>Trending Users</h2>
            {trendingUsers.slice(0, 3).map((user, index) => (
                <div key={index} className="user-flair">
                    <h3>{user.username}</h3>
                    {/* TODO: Add additional user details here (followers) */}
                </div>
            ))} 
        </div>
       
    </div>
);
};

export default Rightbar;

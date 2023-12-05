import React from 'react';
import './Sidebar.css';

const Sidebar = ({ trendingUsers }) => {
    return (
        <div className="sidebar">
            <h2>Trending Users</h2>
            {trendingUsers.slice(0, 3).map((user, index) => (
                <div key={index} className="user-flair">
                    <h3>{user.username}</h3>
                    {/* TODO: Add additional user details here (followers) */}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

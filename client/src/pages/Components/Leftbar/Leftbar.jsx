import React from 'react';
import { Link } from "react-router-dom";
import {
    Home as CottageIcon,
    Person as PersonIcon,
    Search as SearchIcon,

} from '@mui/icons-material';
import './Leftbar.css';

const Leftbar = () => {
    return (
        <div className="leftbar">
            
            <div className="leftbar-icon">
                <Link to="/homepage">
                    <CottageIcon fontSize="large" />
                </Link>
            </div>
            <div className="leftbar-icon">
                <Link to="/search">
                    <SearchIcon fontSize="large" />
                </Link>
            </div>
            <div className="leftbar-icon">
                <Link to="/profile">
                    <PersonIcon fontSize="large" />
                </Link>
            </div>
        </div>
    );
};

export default Leftbar;
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {
    Home as CottageIcon,
    Person as PersonIcon,
    Search as SearchIcon,
    Logout as LogoutIcon,
    Payment as PaymentIcon,
    Settings as SettingsIcon,

} from '@mui/icons-material';
import Cookies from 'js-cookie';
import './Leftbar.css';

const Leftbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logout clicked");

        Cookies.remove('token');
        Cookies.remove('userid');

        console.log("Cookies after logout:", Cookies.get('token'), Cookies.get('userid'));

        navigate('/login');
    };


    return (
        <div className="leftbar">
            <div className='leftbar-links'>
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
                <div className="leftbar-icon">
                    <Link to="/payment">
                        <PaymentIcon fontSize="large" />
                    </Link>
                </div>
                <div className="leftbar-icon">
                    <Link to="/settings">
                        <SettingIcon fontSize="large" />
                    </Link>
                </div>
                <div className="leftbar-icon" onClick={handleLogout}>
                    <LogoutIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
};

export default Leftbar;
import React, { useState } from "react";
//import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";
//import UserPlaceholder from "../UserPlaceholder/UserPlaceholder";
import Vlogo from "../../../images/vlogo.png";
import "./Navbar.css";

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation().pathname;

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
          <img
          className="navbar-logo"
          src={Vlogo}
          alt="vlogo"
          width={"40px"}
        />
      </div>

      <div className="navbar-main">
        <div className="navbar-title">
          <div className="title-content">
            <h2 className="font-bold text-2xl">
                "Home"
              {/* {location.includes("profile") ? (
                <UserPlaceholder
                  setUserData={setUserData}
                  userData={userData}
                />
              ) : location.includes("explore") ? (
                "Explore"
              ) : (
                "Home"
              )} */}
            </h2>
          </div>
        </div>
      </div>

      <div className="navbar-search">
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input type="text" className="search-input" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
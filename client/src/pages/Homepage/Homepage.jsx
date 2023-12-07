import React from "react";

import Leftbar from "../Components/Leftbar/Leftbar.jsx";
import Rightbar from "../Components/Rightbar/Rightbar.jsx";
import Feed from "../Components/Feedbar/Feedbar.jsx";
//import Navbar from '../Components/Navbar/Navbar.jsx';
import "./Homepage.css";

const Homepage = () => {
  //const [loggedIn, setLoggedIn] =useState(false);
  //const [userData, setUserData] =useState(null);
  const tweets = ["Tweet1", "Tweet2", "Tweet3"];
  const trendingUsers = [
    { username: "User1" },
    { username: "User2" },
    { username: "User3" },
  ];

  return (
    <div className="homepage">
      <div className="leftbar">
        <Leftbar />
      </div>

      <div className="feed">
        <Feed tweets={tweets} />
      </div>

      <div className="rightbar">
        <Rightbar trendingUsers={trendingUsers} />
      </div>
    </div>
  );
};

export default Homepage;

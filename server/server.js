const express = require("express");
const userRoutes = require("../server/user/route");
const authRoutes = require("./auth/route");
const postRoutes = require("../server/post/route");
const followerRoutes = require("../server/followers/route");
const middleware = require("./middleware/route");

const cookieParser = require("cookie-parser");
const followingRoutes = require("./following/route");

require("dotenv").config();

app = express();
app.use(express.json());
app.use(cookieParser());

let PORT = 8001;

app.listen(PORT, () => {
  console.log(`running onr ${PORT}`);
});

// auth
app.post("/auth/signup", authRoutes.userSignUp); // user sign up
app.post("/auth/login", authRoutes.userLogIn); // user login
app.get("/auth/logout", authRoutes.userLogOut); // route to generate new jwt tokens when they expire
// ---------

//user
app.get("/user/:id", middleware, userRoutes.getUserDetails);
// -------

// post
app.get("/post", middleware, postRoutes.getAllPost); // get all post
app.get("/post/:id", middleware, postRoutes.getUserPost); // get user specific post by id
app.post("/post/createPost", middleware, postRoutes.createPost); // create post
// ----------

// followers
app.get("/followers/:id", middleware, followerRoutes.getUserFollowers);
app.post("/followers/add-follower", middleware, followerRoutes.addFollower);
// ------
// followers
app.get("/following/:id", middleware, followingRoutes.getUserFollowing);
// ------

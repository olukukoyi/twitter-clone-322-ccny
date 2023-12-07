const express = require("express");
const cors = require("cors");
const userRoutes = require("../server/user/route");
const authRoutes = require("./auth/route");
const postRoutes = require("../server/post/route");
const followerRoutes = require("../server/follows/route");
const middleware = require("./middleware/route");

const cookieParser = require("cookie-parser");

require("dotenv").config();

// taboo words  

app = express();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    methods: ["GET", "POST"],
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
  })
);

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
app.get("/user/:id", userRoutes.getUserDetails);
// -------

// post
app.get("/post", postRoutes.getAllPost); // get all post
app.get("/post/:id", postRoutes.getUserPost); // get user specific post by id
app.post("/post/createPost", postRoutes.createPost); // create post
app.get("/post/single/:id", postRoutes.getPostDetails); // get post details
// ----------

// follows
app.get("/followers/:id", followerRoutes.getUserFollowers);
app.post("/followers/add-follower", followerRoutes.addFollower);
// app.post("/following/:id", middleware, followerRoutes.getUserFollowing);

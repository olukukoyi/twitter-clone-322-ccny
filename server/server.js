const express = require("express");
const cors = require("cors");
const userRoutes = require("../server/user/route");
const authRoutes = require("./auth/route");
const postRoutes = require("../server/post/route");
const followerRoutes = require("../server/follows/route");
const adsRoutes = require("../server/ads/route");
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
app.put("/user/change-user-type", userRoutes.changeUserType);
// -------

// post
app.get("/posts", postRoutes.getAllPost); // get all post
app.get("/posts/:id", postRoutes.getUserPost); // get user specific post by id
app.post("/posts/createPost", postRoutes.createPost); // create post
app.get("/posts/single/:id", postRoutes.getPostDetails); // get post details
app.get("/posts/surfer-feed", postRoutes.getSurferFeed); // get for for surfers ( non auth users )
// ----------

// follows
app.get("/followers/:id", followerRoutes.getUserFollowers);
app.post("/followers/add-follower", followerRoutes.addFollower);
// ----------

// ads
app.get("/ads", adsRoutes.getAllAds);
app.post("/ads/create", adsRoutes.createAd);
app.get("/ads/user/:id", adsRoutes.getUserAds);
app.get("/ads/:id", adsRoutes.getAdsDetails);
// ----------

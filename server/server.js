const express = require("express");
const userRoutes = require("../server/user/route");
const postRoutes = require("../server/post/route");

const jwt = require("jsonwebtoken");
const fetch = require("node-fetch");
const cookieParser = require("cookie-parser");

require("dotenv").config();

app = express();
app.use(express.json());
app.use(cookieParser());

let PORT = 8000;

// middleware

const authorizeToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (token == undefined || token == null) {
    console.log("empty token");

    return res.sendStatus(404);
  }

  jwt.verify(token, process.env.ACCSS_TOKEN_SECRET, async (err, user) => {
    if (err) {
      console.log("running");
      try {
        // try and generate a new token b/c it expired
        let refreshToken = req.cookies["refresh-token"];

        console.log("refreshToken inner: ", refreshToken);

        const data = await fetch("http://localhost:8000/user/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // You may need to include other headers like authorization headers or tokens, depending on your server's requirements
          },
          body: JSON.stringify({ token: refreshToken }),
        });
        const result = await data.json();

        res.cookie("access-token", result.newAccessToken, {
          maxAge: 15000,
        });
        console.log("generated new token ,");
        next();
      } catch (error) {
        console.log("error: ", error);
        next();
      }
    }
    console.log("token is still valid");
    next();
  });
};

//

app.listen(PORT, () => {
  console.log(`running onr ${PORT}`);
});

// users
app.post("/user/signup", userRoutes.SignUp);
app.post("/user/login", userRoutes.login);
app.post("/user/token", userRoutes.creatingNewToken);
// ---------

// post
app.get("/post", authorizeToken, postRoutes.getAllPost);
app.get("/post/:id", authorizeToken, postRoutes.getUserPost);
app.post("/post/createPost", authorizeToken, postRoutes.createPost);
// ----------

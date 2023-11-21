const jwt = require("jsonwebtoken");

const authorizeToken = async (req, res, next) => {
  const token = req.cookies["access-token"];

  if (token == undefined || token == null) {
    console.log("empty token");
    return res.sendStatus(401);
  } else {
    jwt.verify(token, process.env.ACCSS_TOKEN_SECRET, async (err, user) => {
      if (err) {
        console.log("invalid token");
        res.json({ message: "invalid token" });
      }
      console.log("token is still valid");
      next();
    });
  }
};

module.exports = authorizeToken;

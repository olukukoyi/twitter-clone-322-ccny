const prisma = require("../prismadb");
const jwt = require("jsonwebtoken");

const SignUp = async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser !== null) {
      return res.json({ message: "email already exist" });
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password,
      },
    });

    res.json({ user: newUser });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser == null) {
      return res.json({ message: "email does not exist" });
    }

    const { id, name } = existingUser;

    if (existingUser.password === password) {
      const token = jwt.sign({ id, name }, process.env.ACCSS_TOKEN_SECRET, {
        expiresIn: "10m",
      });
      const refreshToken = jwt.sign(
        { id, name },
        process.env.REFRESH_TOKEN_SECRET
      );

      // store tokens in cookies
      res.cookie("access-token", token, {
        maxAge: 600000,
      });
      res.cookie("refresh-token", refreshToken);

      return res.json({
        user: existingUser,
        token: token,
        refreshToken: refreshToken,
      });
    }

    res.json({ user: newUser });
  } catch (err) {
    return res.json({ error: err });
  }
};

const creatingNewToken = (req, res, next) => {
  // fix this up , watch vid to set up this function
  const token = req.body.token; // this should be the refresh token
  if (token == null) {
    console.log("empty token");
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      console.log("invalid refresh token: ", err);
      return res.status(403).json({ message: "invalid" });
    }

    // create new access token
    console.log("generating new token...");
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCSS_TOKEN_SECRET,
      {
        expiresIn: "10m",
      }
    );

    console.log("NEW ACCESS TOKEN  ", accessToken);
    res.cookie("access-token", accessToken, {
      maxAge: 600000,
    });

    jwt.verify(
      req.cookies["access-token"],
      process.env.ACCSS_TOKEN_SECRET,
      (err, user) => {
        if (err) {
          console.log("error in generating new accesstoken and then verifying");
          return res.json({ error: err });
        }
        next();
      }
    );
  });

  // return res.json({ token: token });
};

const userRoutes = {
  SignUp,
  login,
  creatingNewToken,
};

module.exports = userRoutes;

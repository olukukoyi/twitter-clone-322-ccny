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
        expiresIn: "15s",
      });
      const refreshToken = jwt.sign(
        { id, name },
        process.env.REFRESH_TOKEN_SECRET
      );

      // store tokens in cookies
      res.cookie("access-token", token, {
        maxAge: 15000,
      });
      res.cookie("refresh-token", refreshToken);

      // storing refresh token in db
      // const updatedUserAndToken = await prisma.user.update({
      //   where: { email: email },
      //   data: {
      //     refreshToken: refreshToken,
      //   },
      // });

      return res.json({
        user: existingUser,
        token: token,
        refreshToken: refreshToken,
      });
    }

    res.json({ user: newUser });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
};

const creatingNewToken = (req, res) => {
  // fix this up , watch vid to set up this function
  const token = req.body.token; // this should be the refresh token
  console.log("from /token: ", req.body);
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
    console.log("generating...");
    const accessToken = jwt.sign(
      { id: user.id },
      process.env.ACCSS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      }
    );

    console.log("NEW ACCESS TOKEN FROM /TOKEN: ", accessToken, user);
    return res.json({ newAccessToken: accessToken, user: user });
  });

  // console.log(token);
  // return res.json({ token: token });
};

const userRoutes = {
  SignUp,
  login,
  creatingNewToken,
};

module.exports = userRoutes;

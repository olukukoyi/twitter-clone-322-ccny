const jwt = require("jsonwebtoken");
const prisma = require("../prismadb");

const userSignUp = async (req, res) => {
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

const userLogIn = async (req, res) => {
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

      // store tokens in cookies
      res.cookie("access-token", token, {
        maxAge: 600000,
      });

      return res.json({
        user: existingUser,
        token: token,
      });
    }

    res.json({ user: newUser });
  } catch (err) {
    console.log(err);
    return res.json({ error: err });
  }
};

const userLogOut = async (req, res) => {
  res.cookie("access-token", "", {
    maxAge: 1,
  });

  res.redirect("/");
};

const authRoutes = {
  userSignUp,
  userLogIn,
  userLogOut,
};

module.exports = authRoutes;

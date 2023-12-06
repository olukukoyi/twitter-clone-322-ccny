const prisma = require("../prismadb");

const getUserDetails = async (req, res) => {
  const id = req.params.id;
  const { password, ...userObject } = await prisma.user.findUnique({
    where: {
      id: id,
    },
    include: {
      Followers: {
        select: {
          personFollowingUser: {
            select: { id: true, name: true, email: true },
          },
        },
      },
      Following: {
        select: {
          User: {
            select: { id: true, name: true, email: true },
          },
        },
      },
    },
  });

  res.json({ user: userObject });
};

//handle errors when theyre already trendy, corporate and ordinary
const changeUserType = async (req, res) => {
  // types of user: corportate , trendy (handle manually) , super, ordinary
  const { type, userId } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      post: {
        include: { likes: true },
      },
    },
  });

  if (type === "corporate" && user.userType != "corportate") {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userType: "corporate",
      },
    });
    res.json({ updatedUser: updatedUser });
  }
  if (type === "ordinary" && user.userType != "ordinary") {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        userType: "ordinary",
      },
    });
    res.json({ updatedUser: updatedUser });
  }
  if (type === "trendy" && user.userType != "trendy") {
    if (user.post.length < 1) {
      res.json({ error: "insuffiencent amount of posts, denied" });
    }
    let count = 0;
    const userPosts = user.post;
    console.log(userPosts);
    for (const post of userPosts) {
      if (post.likes.length >= 10) {
        count += 1;
        console.log(count);
      }
      if (count === 2) {
        const updatedUser = await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            userType: "trendy",
          },
        });
        res.json({ updatedUser: updatedUser });
      }
    }

    res.json({ error: "insuffiencent amount of likes, denied" });
  }
};

// set up user type

const userRoutes = { getUserDetails, changeUserType };

module.exports = userRoutes;

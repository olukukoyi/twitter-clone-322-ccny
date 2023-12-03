const prisma = require("../prismadb");

const getUserFollowers = async (req, res) => {
  const id = req.params.id;

  const followers = await prisma.followers.findMany({
    where: {
      followeeId: id,
    },
    // include: {
    //   personFollowingUser: true,
    // },
    select: {
      personFollowingUser: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
  console.log(followers[0]);
  return res.json({ followers: followers });
};

const addFollower = async (req, res) => {
  const { currentUserId, newFollower } = req.body;
  console.log(req.body);

  const updatedUser = await prisma.user.update({
    where: { id: currentUserId },
    data: {
      followers: {
        connect: {
          id: newFollower,
        },
      },
    },
    include: {
      followers: true,
      follows: true,
    },
  });
  res.json({ updatedUser: updatedUser });
};

const followerRoutes = {
  getUserFollowers,
  addFollower,
};

module.exports = followerRoutes;

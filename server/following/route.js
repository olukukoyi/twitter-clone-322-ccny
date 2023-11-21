const prisma = require("../prismadb");

const getUserFollowing = async (req, res) => {
  const id = req.params.id;

  const following = await prisma.following.findMany({
    where: {
      personBeingFollowed: id,
    },

    select: {
      User: {
        select: { name: true },
      },
    },
  });

  res.json({ following: following });
};

const addNewFollowing = async (req, res) => {};

const followingRoutes = {
  getUserFollowing,
  addNewFollowing,
};

module.exports = followingRoutes;

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
const userRoutes = { getUserDetails };

module.exports = userRoutes;

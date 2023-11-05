const prisma = require("../prismadb");

const getAllPost = async (req, res) => {
  res.json({ message: "post route" });
};

const postRoutes = { getAllPost };

module.exports = postRoutes;

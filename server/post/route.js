const prisma = require("../prismadb");

const getAllPost = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json({ message: "post route", posts: posts });
};

const getUserPost = async (req, res) => {
  const id = req.params.id;
  const userPost = await prisma.post.findMany({
    where: {
      userId: id,
    },
  });
  res.json({ userPost: userPost });
};

const createPost = async (req, res) => {
  const { body, title, userId } = req.body;

  const newPost = await prisma.post.create({
    data: {
      title,
      body,
      userId,
    },
  });
  return res.json({ newPost: newPost });
};

const postRoutes = { getAllPost, getUserPost, createPost };

module.exports = postRoutes;

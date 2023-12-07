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

const getPostDetails = async (req, res) => {
  const id = req.body.id;

  const postDetails = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  res.json({ postDetails: postDetails });
};

const getSurferFeed = async (req, res) => {
  // get feed from 3 top 3 trendy users
};

const postRoutes = {
  getAllPost,
  getUserPost,
  createPost,
  getPostDetails,
  getSurferFeed,
};

module.exports = postRoutes;

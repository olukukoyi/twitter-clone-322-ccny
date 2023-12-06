const prisma = require("../prismadb");

const getAllAds = async (req, res) => {
  const ads = await prisma.ads.findMany();

  res.json({ ads: ads });
};

const createAd = async (req, res) => {
  const { title, body, userId } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (user.userType != "corporate") {
    res.json({ message: "you are not a corporate user!" });
  }

  const newAd = await prisma.ads.create({
    data: {
      title,
      body,
      userId,
    },
  });

  res.json({ newAd: newAd });
};

const getUserAds = async (req, res) => {
  const id = req.params.id;

  const userAds = await prisma.ads.findMany({
    where: {
      userId: id,
    },
  });
  res.json({ userAds: userAds });
};

const getAdsDetails = async (req, res) => {
  const id = req.params.id;

  const details = await prisma.ads.findUnique({
    where: {
      id: id,
    },
  });

  res.json({ adDetails: details });
};

const adRoutes = {
  createAd,
  getAllAds,
  getUserAds,
  getAdsDetails,
};

module.exports = adRoutes;

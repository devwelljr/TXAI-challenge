require("dotenv").config();

const jwt = require("jsonwebtoken");
const { User } = require("../database/models");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  const shh = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }

  try {
    const { email } = jwt.verify(token, shh);

    const user = await User.findOne({ where: { email } });

    if (!user.dataValues) {
      return res.status(401).json({ message: "Expired or invalid token" });
    }

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Expired or invalid token" });
  }
};

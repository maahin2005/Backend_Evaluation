const jwt = require("jsonwebtoken");
const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");
require("dotenv").config();

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "USER NOT FOUND" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid PAssword" });
    }

    const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY);

    res.status(200).json({ message: "User Login Successfully", user, token });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = loginUser;

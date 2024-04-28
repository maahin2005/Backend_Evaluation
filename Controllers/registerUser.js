const UserModel = require("../Models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(403).json({ message: "USER ALREADY EXISTED" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
      username,
    });

    newUser.save();

    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;

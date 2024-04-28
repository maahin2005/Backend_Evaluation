const { Router } = require("express");
const getUsers = require("../Controllers/Users/getUsers");
const registerUser = require("../Controllers/Users/registerUser");
const loginUser = require("../Controllers/Users/loginUser");

const userRouters = Router();

userRouters.get("/", getUsers);
userRouters.post("/register", registerUser);
userRouters.post("/login", loginUser);

module.exports = userRouters;

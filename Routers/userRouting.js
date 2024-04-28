const { Router } = require("express");
const getUsers = require("../Controllers/getUsers");
const registerUser = require("../Controllers/registerUser");
const loginUser = require("../Controllers/loginUser");

const userRouters = Router();

userRouters.get("/", getUsers);
userRouters.post("/register", registerUser);
userRouters.post("/login", loginUser);

module.exports = userRouters;

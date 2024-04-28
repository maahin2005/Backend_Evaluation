const express = require("express");
const connectDb = require("./config/db");
const userRouters = require("./Routers/userRouting");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/users", userRouters);

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(PORT, async () => {
  try {
    await connectDb(process.env.MONGODB_URI);
    console.log(`Server is listening on ${PORT} and DB is connected`);
  } catch (error) {
    console.log(error.message);
  }
});

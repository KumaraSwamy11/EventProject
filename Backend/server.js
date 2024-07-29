const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { PORT } = require("./constants/constants");
const { DatabaseConnect } = require("./database/mongodb");

//This line imports the Express module. Think of it like bringing a tool into your workspace.
const app = express();

//Db
DatabaseConnect();

//middleware
app.use(express.json());
app.use(cors());

const userRoute = require("./routes/userRoute");
app.use("/api", userRoute);

const server = app.listen(PORT, () => {
  console.log("My server is running on port " + PORT);
});

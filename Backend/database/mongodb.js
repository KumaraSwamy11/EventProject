const { MONGO_URL } = require("../env/env");
const mongoose = require("mongoose");

const DatabaseConnect = () => {
  //Connect to MongoDb
  mongoose.connect(MONGO_URL, {});

  //Event listener for MongoDb Connection
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDb Successfulluy");
  });
};

module.exports = {
  DatabaseConnect,
};

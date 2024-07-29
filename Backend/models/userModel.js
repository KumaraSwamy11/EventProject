const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  // Ensure the date only contains the YYYY-MM-DD part
  this.date = new Date(this.date.toISOString().split("T")[0]);
  next();
});

//User is a mongodb Collection
const EventUser = mongoose.model("EventUser", userSchema);

//export the user object
module.exports = EventUser;

const EventUser = require("../models/userModel");
//const jwt = require("jsonwebtoken")

// const secretKey="hello"

// const generateToken =(id)=>{
//}

//Create new event schdule
exports.createEvent = async (req, res) => {
  try {
    const { title, date, location } = req.body;

    const Eventuser = new EventUser({
      title: title,
      date: date,
      location: location,
    });

    await Eventuser.save();

    res.status(201).json({
      success: true,
      data: Eventuser,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: err.message,
    });
  }
};

//To Get all Events

exports.getAllEvents = async (req, res) => {
  try {
    // const { title, date, location } = req.body;

    // const Eventuser = new EventUser({
    //   title: title,
    //   date: date,
    //   location: location,
    // });
    const Eventuser = await EventUser.find({ isDeleted: false });

    res.status(201).json({
      success: true,
      data: Eventuser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

//Update the event
exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const { date } = req.body;
  const { location } = req.body;

  try {
    const Eventuser = await EventUser.findByIdAndUpdate(id, {
      title: title,
      date: date,
      location: location,
    });

    res.status(200).json({
      success: true,
      data: Eventuser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error Occrured Not updated",
    });
  }
};

//Delete the event SoftDelete
exports.softDeleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const Eventuser = await EventUser.findById(id);
    Eventuser.isDeleted = true;
    Eventuser.save();

    res.status(200).json({
      success: true,
      data: Eventuser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

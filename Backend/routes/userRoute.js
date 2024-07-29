const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");

const { validate } = require("../middlewares/validate");
const { createEventSchema } = require("../middlewares/validationSchema");

router.post(
  "/eventUser",
  validate(createEventSchema),
  userController.createEvent
);
router.get("/schdules", userController.getAllEvents);
router.put("/updateEvent/:id", userController.updateUserById);
router.put("/delete/:id", userController.softDeleteById);
module.exports = router;

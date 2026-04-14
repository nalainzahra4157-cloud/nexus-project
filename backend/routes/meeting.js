const express = require("express");
const router = express.Router();

const Notification = require("../models/Notification");
const protect = require("../middleware/protect");
const { getIO } = require("../socket");

router.post("/", protect, async (req, res) => {
  try {
    const { participant } = req.body;

    const notification = await Notification.create({
      user: participant,
      message: "New meeting scheduled",
      type: "meeting",
      isRead: false,
    });

    const io = getIO();

    console.log("📡 EMIT TRY:", participant);

    if (io) {
      io.to(participant.toString()).emit("notification", notification);
    }

    res.status(201).json({ message: "Meeting created", notification });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
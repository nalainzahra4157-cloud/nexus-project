const express = require("express");
const router = express.Router();

const protect = require("../middleware/protect");

// INVESTOR DASHBOARD
router.get("/investor", protect, (req, res) => {
  res.json({
    message: "Investor dashboard working",
    user: req.user,
  });
});

module.exports = router;
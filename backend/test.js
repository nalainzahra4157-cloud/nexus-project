const mongoose = require('mongoose');

mongoose.connect("YOUR_MONGO_URI")
  .then(() => {
    console.log("Connected successfully");
    process.exit();
  })
  .catch(err => {
    console.log("Connection failed:", err);
    process.exit();
  });
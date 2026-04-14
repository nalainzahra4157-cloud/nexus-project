const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ MIDDLEWARE
app.use(cors({
  origin: "*", // 🔥 allow all (submission friendly)
}));
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", require("./routes/auth"));
app.use("/api/meeting", require("./routes/meeting"));
app.use("/api/dashboard", require("./routes/dashboard"));

// ✅ CREATE SERVER
const server = http.createServer(app);

// ✅ SOCKET INIT
const { init } = require("./socket");
init(server);

// ✅ MONGODB CONNECT
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("🟢 MongoDB connected"))
  .catch((err) => console.log("🔴 Mongo error:", err));

// ✅ START SERVER
server.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
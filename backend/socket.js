let io;

function init(server) {
  const { Server } = require("socket.io");

  io = new Server(server, {
    cors: {
      origin: "*", // 🔥 allow all (easy for submission)
      methods: ["GET", "POST"],
    },
  });

  // ✅ CONNECTION EVENT (VERY IMPORTANT)
  io.on("connection", (socket) => {
    console.log("🟢 SOCKET CONNECTED:", socket.id);

    // ✅ JOIN ROOM
    socket.on("join", (userId) => {
      console.log("👤 JOIN RECEIVED:", userId);

      if (!userId) {
        console.log("❌ EMPTY USER ID");
        return;
      }

      socket.join(userId);

      console.log("✅ JOINED ROOM:", userId);
    });
  });

  return io;
}

function getIO() {
  if (!io) {
    console.log("❌ IO NOT READY");
  }
  return io;
}

module.exports = { init, getIO };
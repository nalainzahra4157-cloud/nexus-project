"use client";

import Bell from "./Bell";

export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        background: "#111",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      {/* LEFT */}
      <h2 style={{ margin: 0 }}>🔥 NEXUS FRONTEND</h2>

      {/* RIGHT */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <Bell />

        <button
          style={{
            padding: "6px 12px",
            background: "white",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Profile
        </button>
      </div>
    </div>
  );
}
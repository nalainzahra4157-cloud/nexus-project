"use client";

import { useState } from "react";

export default function Bell() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ position: "relative", fontSize: 22 }}>
      🔔 {count}

      <span
        style={{
          position: "absolute",
          top: -5,
          right: -10,
          background: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: 12,
        }}
      >
        {count}
      </span>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          marginLeft: 10,
          padding: "4px 8px",
          fontSize: 12,
          cursor: "pointer",
        }}
      >
        Test
      </button>
    </div>
  );
}
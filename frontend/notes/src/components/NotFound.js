import React from "react";
import gif from "./404.gif";

function NotFound() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <img
        src={gif}
        alt="404 not found"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}

export default NotFound;

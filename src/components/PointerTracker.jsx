import React, { useState } from "react";

const PointerTracker = () => {
  const [cordinates, setCordinates] = useState({ x: 0, y: 0 });
  function handlePointer(e) {
    setCordinates({ x: e.clientX, y: e.clientY });
    // console.log(cordinates);
  }

  return (
    <div
      style={{
        height: "100vh",
        border: "solid 1px",
        width: "95vw",
        borderRadius: "10px",
        position: "relative",
      }}
      onPointerMove={handlePointer}
    >
      <div
        style={{
          width: "1rem",
          height: "1rem",
          backgroundColor: "red",
          borderRadius: "50%",
          position: "absolute",
          transform: `translate(${cordinates.x}px, ${cordinates.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default PointerTracker;

import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const [count, setcount] = useState(1);

  const red = {
    backgroundColor: "red",
  };
  const yellow = {
    backgroundColor: "yellow",
  };
  const green = {
    backgroundColor: "green",
  };
  const white = {
    backgroundColor: "white",
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      if (count === 4) {
        setcount(1);
      }
    };
  }, [count]);

  return (
    <div>
      <div className="lights">
        <div className="light" style={count == 1 ? red : white}></div>
        <div className="light" style={count == 2 ? yellow : white}></div>
        <div className="light" style={count == 3 ? green : white}></div>
      </div>
    </div>
  );
};

export default TrafficLight;

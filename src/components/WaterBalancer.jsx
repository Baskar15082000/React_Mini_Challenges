import React, { useEffect, useState } from "react";

const WaterBalancer = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [id, setId] = useState(null);
  const [isLeave, setIsLeave] = useState(false);
  const [id_, setId_] = useState(null);
  const [balanceWater, setBalanceWater] = useState(0);
  const containerStyle = {
    height: "20rem",
    width: "8rem",
    border: "solid 2px",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
    display: "flex",
    alignItems: "end",
  };
  const subStyle = {
    backgroundColor: "blue",
    width: "100%",
    height: waterLevel + "%",
    flexDirection: "column",
    borderBottomLeftRadius: "7px",
    borderBottomRightRadius: "7px",
  };

  const waterStyle = {
    backgroundColor: "blue",
    width: "100%",
    height: waterLevel + "%",
    flexDirection: "column",
    borderBottomLeftRadius: "7px",
    borderBottomRightRadius: "7px",
  };
  function decrease() {
    const interval = setInterval(() => {
      if (waterLevel > balanceWater) {
        setWaterLevel((pre) => pre - 1);
      }
    }, 100);
    setId_(interval);
  }

  function start() {
    const interval = setInterval(() => {
      if (waterLevel <= 99) {
        setWaterLevel((pre) => pre + 1);
      }
    }, 100);
    setId(interval);
  }
  function stop() {
    clearInterval(id);
  }
  useEffect(() => {
    return () => {
      if (waterLevel == 99) {
        clearInterval(id);
      } else if (waterLevel === balanceWater) {
        clearInterval(id_);
      }
    };
  }, [id, waterLevel]);

  return (
    <div>
      <button
        onMouseEnter={() => start()}
        onMouseLeave={() => {
          setBalanceWater(Math.round(waterLevel / 2));
          clearInterval(id);
          decrease();
        }}
      >
        start
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "3rem 15rem 0 15rem",
        }}
      >
        <div style={containerStyle}>
          <div style={waterStyle}></div>
        </div>
        <div style={containerStyle}>
          <div style={subStyle}></div>
        </div>
        <div style={containerStyle}>
          <div style={subStyle}></div>
        </div>
        <div style={containerStyle}>
          <div style={subStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default WaterBalancer;

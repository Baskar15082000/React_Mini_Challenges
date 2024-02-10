import React, { useEffect, useState } from "react";

const WaterBalancer = () => {
  const [waterLevel, setWaterLevel] = useState(0);
  const [id, setId] = useState(null);
  const [id_, setId_] = useState(null);
  const [balanceId, setBalanceId] = useState(null);
  const [level, setLevel] = useState(0);
  const [container, setContainer] = useState([1, 2, 3, 4]);
  const [match, setMatch] = useState(null);

  const containerStyle = {
    height: "18rem",
    width: "7rem",
    border: "solid 2px",
    borderBottomLeftRadius: "7px",
    borderBottomRightRadius: "7px",
    display: "flex",
    alignItems: "end",
  };
  const subStyle = {
    backgroundColor: "#0ff",
    width: "100%",
    height: level + "%",
    flexDirection: "column",
    borderBottomLeftRadius: "7px",
    borderBottomRightRadius: "7px",
  };

  const waterStyle = {
    backgroundColor: "#0ff",
    width: "100%",
    height: waterLevel + "%",
    flexDirection: "column",
    borderBottomLeftRadius: "7px",
    borderBottomRightRadius: "7px",
    paddingBottom: "2.5%",
  };
  function decrease() {
    const interval = setInterval(() => {
      if (waterLevel > level) {
        setWaterLevel((pre) => pre - 1);
      }
    }, 100);
    setId_(interval);
  }

  function start() {
    const interval = setInterval(() => {
      if (waterLevel <= 97) {
        setWaterLevel((pre) => pre + 1);
      }
    }, 100);
    setId(interval);
  }
  function balanceWaterfunc() {
    const interval = setInterval(() => {
      if (level <= waterLevel && level <= 100) {
        setLevel((pre) => pre + 1);
      }
    }, 400);
    setBalanceId(interval);
  }
  function stop() {
    clearInterval(id);
  }
  useEffect(() => {
    return () => {
      if (waterLevel == 98) {
        clearInterval(id);
      }
      if (waterLevel === level || waterLevel <= level) {
        clearInterval(id_);
      }
      if (level == 101 || level >= waterLevel) {
        clearInterval(balanceId);
      }
    };
  }, [id, waterLevel, id_, balanceId, level]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          boxShadow: "2px 2px 2px 2px",
          padding: "1.3rem 1rem 1.3rem 1rem",
          fontSize: "1.4rem",
          marginBottom: "1.5rem",
        }}
      >
        Water Balancer
      </div>
      <div style={{ textAlign: "center" }}>
        Press and Hold "Add" to start filling the tank
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem 20rem 0rem 20rem",
        }}
      >
        <button
          style={{
            height: "2rem",
            color: "red",
            margin: "1rem 1rem 0 1rem",
          }}
          onClick={() => {
            setLevel(0);
            setWaterLevel(0);
            setMatch(null);
          }}
        >
          Empty_All
        </button>
        {container.map((e) => {
          return (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>
                <button
                  style={{
                    margin: "1rem",
                    width: "7rem",
                    padding: ".5rem",
                    borderRadius: "10px",
                    border: "solid 1px",
                    boxShadow: "1px 1px 2px gray",
                    color: "white",
                    backgroundColor: "green",
                    cursor: "pointer",
                  }}
                  onMouseDown={() => {
                    setMatch(e);
                    start();
                  }}
                  onMouseUp={() => {
                    clearInterval(id);
                    balanceWaterfunc();
                    decrease();
                  }}
                >
                  add
                </button>
              </div>
              {e === match ? (
                <div style={containerStyle}>
                  <div style={waterStyle}></div>
                </div>
              ) : (
                <div style={containerStyle}>
                  <div style={subStyle}></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <button onClick={() => setContainer([1, 2, 3, 4])}>4</button>
        <button onClick={() => setContainer([1, 2, 3, 4, 5, 6])}>6</button>
        <button onClick={() => setContainer([1, 2, 3, 4, 5, 6, 7, 8])}>
          8
        </button>
      </div>
    </div>
  );
};

export default WaterBalancer;

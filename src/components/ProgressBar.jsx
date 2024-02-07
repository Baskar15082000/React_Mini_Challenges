import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [val, setVal] = useState(0);
  const [ids, setIds] = useState(null);

  function onstart() {
    const id = setInterval(() => {
      if (val <= 100) {
        setVal((pre) => pre + 1);
      }
    }, 50);
    setIds(id);
  }
  function onstop() {
    clearInterval(ids);
  }
  function onreset() {
    clearInterval(ids);
    setVal(0);
  }
  useEffect(() => {
    return () => {
      if (val === 100) {
        clearInterval(ids);
      }
    };
  }, [ids, val]);

  return (
    <div
      style={{
        boxShadow: "2px 2px 5px black",
        borderRadius: "10px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "300px",
      }}
    >
      <div
        style={{
          boxShadow: "2px 2px 2px black",
          width: "300px",
          backgroundColor: "gray",
          height: "25px",
          borderRadius: "10px",
          margin: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            width: val + "%",
            borderRadius: "10px",
            height: "25px",
          }}
        ></div>
      </div>
      <div>
        <button
          style={{ margin: "1rem", boxShadow: "2px 2px 2px black" }}
          onClick={() => onstart()}
        >
          start
        </button>
        <button
          style={{ margin: "1rem", boxShadow: "2px 2px 2px black" }}
          onClick={() => onstop()}
        >
          stop
        </button>
        <button
          style={{ margin: "1rem", boxShadow: "2px 2px 2px black" }}
          onClick={() => onreset()}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;

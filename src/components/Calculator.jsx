import React, { useState } from "react";

const Calculator = () => {
  const [number, setNumber] = useState(0);
  const [sym, setSym] = useState("");
  const [ans, setAns] = useState(0);

  const [temp, setTemp] = useState(0);
  const arr = [
    "Clear",
    "Del",
    "reset",
    "=",
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "/",
    7,
    8,
    9,
    "-",
    0,
    "*",
  ];

  function handle(e) {
    if (Number.isInteger(e)) {
      setAns((pre) => pre * 10 + e);
    } else {
      if (sym == "") {
        setTemp(ans);
        setSym(e);
        setAns(0);
      } else if (sym !== "") {
        if (sym === "+") {
          setTemp((pre) => pre + ans);
          setAns(0);
          setSym("");
        }
        if (sym == "-") {
          setTemp((pre) => pre - ans);
          setAns(0);
          setSym("");
        }
        if (sym == "/") {
          setTemp((pre) => pre - ans);
          setAns(0);
          setSym("");
        }
        if (sym == "*") {
          setTemp((pre) => pre - ans);
          setAns(0);
          setSym("");
        }
      }
    }
  }
  // function ondel() {
  //   //setAns((pre) => pre / 10);
  //   setNumber((pre) => pre.slice(0, pre.length - 1));
  // }
  function handleAns() {
    if (sym === "+") {
      setNumber(temp + ans);
    }
    if (sym === "-") {
      setNumber(temp - ans);
    }
    if (sym === "/") {
      setNumber(temp / ans);
    }
    if (sym === "*") {
      setNumber(temp * ans);
    }

    setTemp(0);
    setAns(0);
    setSym("");
  }
  function handleDelete() {}
  return (
    <div className="calc">
      <div className="screen">
        <p style={{ padding: "0 1rem 0 1rem" }}>{number}</p>
      </div>
      <div className="button_">
        {arr.map((e) => {
          return (
            <button
              onClick={() => {
                // console.log(e);
                if (e === "Clear") {
                  setNumber(0);
                  setAns(0);
                  setTemp(0);
                  setSym("");
                } else if (e === "Del") {
                  ondel();
                } else if (e === "=") {
                  handleAns();
                } else if (e !== "Del" && e !== "=" && e != "reset") {
                  if (number === 0) {
                    setNumber(e);
                  } else {
                    setNumber((pre) => pre + e.toString());
                  }
                }
                if (e !== "Clear") {
                  handle(e);
                }
              }}
              className="btn_"
            >
              {e}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calculator;

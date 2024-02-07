import React, { useEffect, useState } from "react";
import TicTac from "./components/TicTac";
import { v4 as uuidV4 } from "uuid";
const TicTacToe = () => {
  const [value, setValue] = useState([
    { val: "", id: 1 },
    { val: "", id: 2 },
    { val: "", id: 3 },
    { val: "", id: 4 },
    { val: "", id: 5 },
    { val: "", id: 6 },
    { val: "", id: 7 },
    { val: "", id: 8 },
    { val: "", id: 9 },
  ]);
  const [check, setcheck] = useState(true);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [w, setw] = useState(true);
  function clicked(id) {
    console.log("l");
    var t = value;
    var c = [];
    t.map((e) => {
      if (e.id === id && check === true && e.val === "" && w) {
        console.log("t");
        e.val = "X";
        setcheck(false);
      } else if (e.id === id && check === false && e.val === "" && w) {
        e.val = "O";
        setcheck(true);
      }
      c.push(e);
    });
    setValue(c);
    if (w) {
      let x = checkfor(t, "X");
      let o = checkfor(t, "O");
      console.log(x);
      if (x & o) {
        setx((pre) => pre + 1);
        sety((pre) => pre + 1);
        setw(false);
      } else if (x) {
        setx((pre) => pre + 1);
        setw(false);
      } else if (o) {
        sety((pre) => pre + 1);
        setw(false);
      }
    }
  }

  function checkfor(t, m) {
    let firstrow = 0,
      secrow = 0,
      thirdrow = 0,
      fc = 0,
      sc = 0,
      tc = 0,
      d1 = 0,
      d2 = 0;
    console.log(t);
    t.map((e) => {
      if (e.id <= 3) {
        if (e.val === m) {
          firstrow++;
          console.log(firstrow);
        }
      }
      if (e.id > 3 && e.id <= 6) {
        if (e.val === m) {
          secrow++;
        }
      }
      if (e.id > 6 && e.id <= 9) {
        if (e.val === m) {
          thirdrow++;
        }
      }
      if (e.id === 1 || e.id === 4 || e.id === 7) {
        if (e.val === m) fc++;
      }
      if (e.id === 2 || e.id === 5 || e.id === 8) {
        if (e.val === m) sc++;
      }
      if (e.id === 3 || e.id === 6 || e.id === 9) {
        if (e.val === m) tc++;
      }
      if (e.id === 1 || e.id === 5 || e.id === 9) {
        if (e.val === m) d1++;
      }
      if (e.id === 3 || e.id === 5 || e.id === 7) {
        if (e.val === m) d2++;
      }
    });
    if (
      firstrow === 3 ||
      secrow === 3 ||
      thirdrow === 3 ||
      fc === 3 ||
      sc === 3 ||
      tc === 3 ||
      d1 === 3 ||
      d2 === 3
    ) {
      return true;
    } else {
      return false;
    }
  }
  function reset() {
    var t = value;
    var c = [];
    t.map((e) => {
      e.val = "";

      c.push(e);
    });
    setcheck(true);
    setValue(c);
    setw(true);
  }
  return (
    <div>
      <div>
        X:{x}
        {"__________________"}
        O:{y}
      </div>
      <div className="board">
        {value.map((e) => {
          return <TicTac key={e.id} vale={e.val} id={e.id} clicked={clicked} />;
        })}
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default TicTacToe;

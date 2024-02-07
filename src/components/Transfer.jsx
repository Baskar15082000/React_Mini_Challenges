import React from "react";
import { useEffect, useState } from "react";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Transfer = () => {
  const [items, setItems] = useState([
    { id: 1, course: "react", checked: false, direction: "left" },
    { id: 2, course: "js", checked: false, direction: "left" },
    { id: 3, course: "node js", checked: false, direction: "left" },
    { id: 4, course: "Java", checked: false, direction: "left" },
    { id: 5, course: "SQL", checked: false, direction: "left" },
  ]);

  const leftItem = items.filter((e) => e.direction === "left");
  const rightItem = items.filter((e) => e.direction === "right");

  function transferAll(to) {
    const t = items;
    var it = [];
    t.map((e) => {
      e.direction = to;
      it.push(e);
    });
    setItems(it);
  }
  function handleCheck(id) {
    const t = items;
    var it = [];
    t.map((e) => {
      if (e.id === id) {
        e.checked = !e.checked;
      }
      it.push(e);
    });
    setItems(it);
  }
  function move(to) {
    const t = items;
    var it = [];
    t.map((e) => {
      if (e.checked) {
        e.direction = to;
        e.checked = !e.checked;
      }
      it.push(e);
    });
    setItems(it);
  }

  return (
    <div>
      <div className="flex">
        <div className="f1">
          {leftItem.map((e) => {
            return (
              <div key={e.id}>
                <input
                  type="checkbox"
                  key={e.id}
                  checked={e.checked}
                  onChange={() => handleCheck(e.id)}
                />
                {e.course}
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "6px",
          }}
        >
          <button onClick={() => transferAll("right")}>{">>"}</button>
          <button onClick={() => transferAll("left")}>{"<<"}</button>
          <button onClick={() => move("right")}>{">"}</button>
          <button onClick={() => move("left")}>{"<"}</button>
        </div>
        <div className="f2">
          {rightItem.map((e) => {
            return (
              <div key={e.id}>
                <input
                  type="checkbox"
                  id={e.id}
                  checked={e.checked}
                  onChange={() => handleCheck(e.id)}
                />
                {e.course}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Transfer;

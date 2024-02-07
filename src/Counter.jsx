import React, { useEffect, useState } from "react";
import Count from "./components/Count";

const Counter = () => {
  const [counter, setcounter] = useState([]);
  const [ids, setids] = useState(1);

  useEffect(() => {
    var a = [{ count: 0, id: ids }];
    setcounter([...a]);
  }, []);
  function oninc(id) {
    var c = counter;
    c.map((e) => {
      if (e.id === id) {
        e.count++;
      }
    });
    setcounter([...c]);
  }

  function ondec(id) {
    var c = counter;
    c.map((e) => {
      if (e.id === id) {
        e.count--;
      }
    });
    setcounter([...c]);
  }
  function add() {
    setids((pre) => pre + 1);
    setcounter((pre) => {
      return [...pre, { count: 0, id: ids + 1 }];
    });

    console.log(counter);
  }
  function ondelete(id) {
    var c = counter;
    console.log(id);
    var t = c.filter((e) => e.id !== id);
    setcounter([...t]);
  }
  function onreset() {
    var c = counter;

    c.map((e) => (e.count = 0));
    setcounter([...c]);
  }

  return (
    <div>
      <button onClick={onreset}>reset</button>
      <br />

      <button onClick={add}>add</button>
      <br />
      <br />
      {counter.map((e) => {
        return (
          <Count
            key={e.id}
            value={e.count}
            id={e.id}
            oninc={oninc}
            ondec={ondec}
            ondelete={ondelete}
          />
        );
      })}
    </div>
  );
};

export default Counter;

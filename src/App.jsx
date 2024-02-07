import { useEffect, useState } from "react";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import "./App.css";

function App() {
  const [str, setstr] = useState([]);
  const [clickt, setclick] = useState(false);

  useEffect(() => {
    let s = [
      { index: 1, state: false },
      { index: 2, state: false },
      { index: 3, state: false },
      { index: 4, state: false },
      { index: 5, state: false },
    ];

    setstr([...s]);
  }, []);

  const style1 = {
    color: "yellow",
  };
  const style2 = {
    color: "gray",
  };

  function funt(id) {
    var t = [];
    str.map((e) => {
      if (e.index <= id) {
        e.state = true;
      }
      t.push(e);
    });
    setstr(t);
  }
  function out() {
    var t = [];
    if (clickt) {
      return;
    }
    str.map((e) => {
      e.state = false;
      t.push(e);
    });
    setstr(t);
  }
  function final(id) {
    var t = [];
    str.map((e) => {
      if (e.index <= id) {
        e.state = true;
      }

      t.push(e);
    });
    setstr(t);
    setclick(true);
    console.log(clickt);
  }

  return (
    <>
      <div className="give">Give Rating</div>
      <div className="star">
        {str.map((e) => {
          return (
            <div
              className="tyh"
              onMouseOver={() => funt(e.index)}
              onMouseOut={out}
              onClick={() => final(e.index)}
              key={e.index}
              style={e.state ? style1 : style2}
            >
              <StarOutlinedIcon className="str" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

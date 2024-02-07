import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(["00", "00", "000"]);
  const [id, setId] = useState(null);

  const handleClick = () => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        let milli = parseInt(prevTime[2]) + 1;
        let secs = parseInt(prevTime[1]);
        let mins = parseInt(prevTime[0]);

        if (milli === 101) {
          milli = 0;
          secs++;
        }

        if (secs === 60) {
          secs = 0;
          mins++;
        }

        return [
          mins.toString().padStart(2, "0"),
          secs.toString().padStart(2, "0"),
          milli.toString().padStart(3, "0"),
        ];
      });
    }, 10);

    setId(intervalId);
  };
  const handleStop = () => {
    clearInterval(id);
  };

  const handleReset = () => {
    clearInterval(id);
    setTime(["00", "00", "000"]);
  };
  useEffect(() => {
    return () => clearInterval(id);
  }, [id]);

  return (
    <>
      <div
        style={{
          height: "10rem",
          width: "10rem",
          borderRadius: "50%",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "2px 2px 5px black",
        }}
      >
        stopWatch
        <div
          style={{
            boxShadow: "1px 2px 5px black",
            padding: ".3rem",
            margin: ".5rem",
          }}
        >
          {time[0] + " : " + time[1] + " : " + time[2]}
        </div>
        <button
          style={{
            boxShadow: "2px 2px 2px black",
            margin: ".1rem",
            border: "none",
          }}
          onClick={handleClick}
        >
          start
        </button>
        <button
          style={{
            boxShadow: "2px 2px 2px black",
            margin: ".1rem",
            border: "none",
          }}
          onClick={handleStop}
        >
          stop
        </button>
        <button
          style={{
            boxShadow: "2px 2px 2px black",
            margin: ".1rem",
            border: "none",
          }}
          onClick={handleReset}
        >
          reset
        </button>
      </div>
    </>
  );
}

export default App;

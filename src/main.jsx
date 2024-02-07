import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Counter from "./Counter.jsx";
import Transfer from "./components/Transfer.jsx";
import CounterByReducer from "./CounterByReducer.jsx";
import TicTacToe from "./TicTacToe.jsx";
import Forms from "./Forms.jsx";
import TrafficLight from "./TrafficLight.jsx";
import Calculator from "./components/Calculator.jsx";
import StopWatch from "./components/StopWatch.jsx";
import JSONCreator from "./components/JSONCreator_.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import ChatReply from "./components/ChatReply.jsx";
import Toastify from "./components/Toastify.jsx";
import AutoComplete from "./components/AutoComplete.jsx";
import AutoCompleteOffline from "./components/AutoCompleteOffline.jsx";
import Temp from "./components/Temp.jsx";
import PointerTracker from "./components/PointerTracker.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Transfer />
    <br />
    <hr />
    <App />
    <br />
    <hr />
    <Counter />
    <hr />
    <br />
    {/* <CounterByReducer /> */}
    <br />
    <br />

    <TicTacToe />
    <br />
    <hr />
    <TrafficLight />
    <br />
    <hr />
    <Calculator />
    <br />
    <hr />

    <StopWatch />
    <br />
    <hr />
    <br />
    <JSONCreator />
    <br />
    <hr />
    <ProgressBar />
    <br />
    <hr />
    <Toastify />
    <br />
    <hr />
    <AutoCompleteOffline />
    <br />
    <hr />
    <AutoComplete />
    <br />
    {/* <PointerTracker /> */}
  </React.StrictMode>
);

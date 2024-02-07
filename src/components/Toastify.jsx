// App.js
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./Toast";

function Toastify() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "2px 2px 2px black",
        width: "17rem",
        padding: "2rem",
        borderRadius: "10px",
        margin: "1rem 0 1rem 0",
      }}
    >
      <ToastContainer />
      <Toast type="success" message="This is a success message!" />
      <Toast type="error" message="This is an error message!" />
    </div>
  );
}

export default Toastify;

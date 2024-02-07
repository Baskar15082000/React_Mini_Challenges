import { Info } from "@mui/icons-material";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = ({ type, message }) => {
  const showToast = () => {
    toast[type](message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <button
      style={{
        border: "none",
        padding: ".2rem",
        boxShadow: "2px 2px 2px gray",
      }}
      onClick={showToast}
    >
      Show {type} Toast
    </button>
  );
};

export default Toast;

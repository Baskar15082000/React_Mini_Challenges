import React from "react";

const Count = ({ value, id, oninc, ondec, ondelete }) => {
  return (
    <>
      <button onClick={() => oninc(id)}>increment</button>
      <div>{value}</div>

      <button onClick={() => ondec(id)}>Decrement</button>
      <button onClick={() => ondelete(id)}>delete</button>
      <br />
      <br />
    </>
  );
};

export default Count;

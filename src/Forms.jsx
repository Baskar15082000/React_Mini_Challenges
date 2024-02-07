import React, { useRef, useState } from "react";

const Forms = () => {
  const r = useRef();
  function sub(e) {
    e.preventDefault();
    console.log(r.current.value);
  }
  return (
    <div>
      <form action="" onSubmit={sub}>
        <input type="text" ref={r} />
      </form>
    </div>
  );
};

export default Forms;

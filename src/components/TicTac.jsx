import React from "react";

const TicTac = ({ vale, id, clicked }) => {
  return (
    <div>
      <div className="block" onClick={() => clicked(id)}>
        <span className="txt">{vale}</span>
      </div>
    </div>
  );
};

export default TicTac;

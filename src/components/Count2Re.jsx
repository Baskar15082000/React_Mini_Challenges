import React, { useReducer } from "react";

const Count2Re = () => {
  const initialState = {
    counter1: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { counter1: state.counter1 + action.value };
      case "decrement":
        return { counter1: state.counter1 - action.value };
      case "reset":
        return initialState;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <br />
      <div>Object Type</div>
      <br />
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <div>{count.counter1}</div>
    </div>
  );
};

export default Count2Re;

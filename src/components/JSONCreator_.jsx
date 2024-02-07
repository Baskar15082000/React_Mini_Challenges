import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Child from "./Child";

const JSONCreator = () => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [json, setJson] = useState("");
  const [child, setChild] = useState([]);
  function updateValue(id, value) {
    setChild(
      child.map((e) => {
        if (e.id === id) {
          return { ...e, value: value };
        }
        return e;
      })
    );
  }
  function updateKey(id, key) {
    setChild(
      child.map((e) => {
        if (e.id === id) {
          return { ...e, key: key };
        }
        return e;
      })
    );
  }
  function deleteobj(id) {
    setChild(child.filter((e) => e.id !== id));
  }
  return (
    <div>
      <div style={{ paddingLeft: "1rem" }}>
        <input
          type="text"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="key"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="value"
        />

        <button
          onClick={() =>
            setChild([...child, { id: uuidv4(), key: "", value: "" }])
          }
        >
          +
        </button>
        {child.map((e) => {
          return (
            <Child
            style={{paddingLeft:"1rem"}}
              id={e.id}
              updateKey={updateKey}
              updateValue={updateValue}
              deleteobj={deleteobj}
            />
          );
        })}
        <div>
          <button
            style={{ margin: "1rem 0 1rem 0" }}
            onClick={() => {
              let sub = {};
              sub = child.reduce((acc, curr) => {
                if (curr.key != "" && curr.value != "")
                  acc[curr.key] = curr.value;
                return acc;
              }, {});
              let result = { [key]: value };
              if (child.length != 0) result = { [key]: { ...sub } };
              setJson(JSON.stringify(result));
            }}
          >
            get Json
          </button>
          <div style={{ paddingBottom: "3rem", paddingTop: "1rem" }}>
            {json}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSONCreator;

import React, { useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const Child = ({ id, updateKey, updateValue, deleteobj }) => {
  const [subvalue, setSubvalue] = useState("");
  const [subkey, setSubkey] = useState("");
  const [subChild, setSubChild] = useState([]);

  function updateSubValue(id, value) {
    setSubChild(
      subChild.map((e) => {
        if (e.id === id) {
          return { ...e, value: value };
        }
        return e;
      })
    );
  }

  useEffect(() => {
    updateValue(
      id,
      subChild.reduce((acc, curr) => {
        if (curr.key != "" && curr.value != "") acc[curr.key] = curr.value;
        return acc;
      }, {})
    );
  }, [subChild]);

  function updateSubKey(id, key) {
    setSubChild(
      subChild.map((e) => {
        if (e.id === id) {
          return { ...e, key: key };
        }
        return e;
      })
    );
  }
  function deleteSubObj(id) {
    setSubChild(subChild.filter((e) => e.id !== id));
  }

  return (
    <div>
      <div style={{ paddingLeft: "1rem" }}>
        <input
          type="text"
          value={subkey}
          onChange={(e) => {
            setSubkey(e.target.value);
            updateKey(id, e.target.value);
          }}
        />
        <input
          type="text"
          value={subvalue}
          onChange={(e) => {
            setSubvalue(e.target.value);
            updateValue(id, e.target.value);
          }}
        />
        <button onClick={() => deleteobj(id)}>-</button>
        <button
          onClick={() => {
            setSubChild((pre) => {
              return [...pre, { id: uuidV4(), key: "", value: "" }];
            });
          }}
        >
          +
        </button>
      </div>
      <div style={{ paddingLeft: "1rem" }}>
        {subChild.map((e) => {
          return (
            <Child
              id={e.id}
              updateKey={updateSubKey}
              updateValue={updateSubValue}
              deleteobj={deleteSubObj}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Child;

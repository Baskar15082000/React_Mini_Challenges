import React, { useEffect, useRef, useState } from "react";
import { getUsers } from "../Api";

const AutoComplete = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [Index, setIndex] = useState(-1);

  function handleKeyDown(e) {
    if (e.key === "ArrowUp") {
      setIndex((prevIndex) => {
        const t = prevIndex > 0 ? prevIndex - 1 : users.length;
        if (t != users.length) {
          setName(users[t].login);
        }
        return t;
      });
    } else if (e.key === "ArrowDown") {
      setIndex((prevIndex) => {
        const t = prevIndex < users.length - 1 ? prevIndex + 1 : -1;
        if (t != -1) {
          setName(users[t].login);
        }
        return t;
      });
    } else if (e.key === "Enter" && Index !== -1) {
      setName(users[Index].login);
      setIndex(-1);
    }
  }

  const handleChange = (e) => {
    getUsers(e.target.value).then((res) => {
      if (res) {
        setUsers(res.items);
        console.log(res.items.length);
      } else {
        setUsers([]);
      }
    });
    setName(e.target.value);
    setIndex(-1);
  };

  return (
    <div style={{ border: "solid 1px", borderRadius: "10px" }}>
      <div
        style={{
          boxShadow: "2px 2px 5px black",
          widows: "100%",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        Typeahead / Autocomplete (online)
      </div>
      <div style={{ textAlign: "center" }}>
        Use up & down arrows to navigate suggestions
      </div>
      <div
        style={{
          display: "flex",
          padding: "3rem",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <input
          style={{
            width: "35rem",
            height: "2rem",

            fontSize: "1.2rem",
            padding: ".1rem",
            borderRadius: "5px",
          }}
          type="text"
          value={name}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for GitHub UserName..."
        />
        <div style={{ margin: "1rem" }}>
          {name !== "" &&
            users.map((e, index) => (
              <div
                style={{
                  backgroundColor: index == Index ? "lightBlue" : "transparent",
                  fontSize: "1rem",
                  padding: ".5rem",
                  borderRadius: "5px",
                  width: "35rem",
                  marginBottom: ".5rem",
                  border: "solid 1px gray",
                  cursor: "pointer",
                }}
                key={index}
                onMouseOver={() => setName(e.login)}
              >
                {e.login}{" "}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AutoComplete;

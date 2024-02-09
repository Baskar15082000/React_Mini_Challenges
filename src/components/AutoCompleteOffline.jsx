import React, { useEffect, useRef, useState } from "react";
import countries from "../CountriesData";
const AutoCompleteOffline = () => {
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleChange(e) {
    const value = e.target.value;
    setName(value);
    const filteredSuggestions = countries.filter((country) =>
      country.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    setSelectedIndex(-1);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => {
        const t = prevIndex > 0 ? prevIndex - 1 : suggestions.length;
        setName(suggestions[t]);
        return t;
      });
    } else if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => {
        const t = prevIndex < suggestions.length - 1 ? prevIndex + 1 : -1;
        setName(suggestions[t]);
        return t;
      });
    } else if (e.key === "Enter" && selectedIndex !== -1) {
      setName(suggestions[selectedIndex]);
      setSelectedIndex(-1);
    }
  }
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div style={{ border: "solid 1px", borderRadius: "10px" }}>
      <div
        style={{
          boxShadow: "2px 2px 2px black",
          widows: "100%",
          padding: "2rem",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        Typeahead / Autocomplete (offline)
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
          ref={inputRef}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for Country..."
        />
        <div style={{ margin: "1rem" }}>
          {name !== "" &&
            suggestions.map((e, index) => (
              <div
                style={{
                  backgroundColor:
                    index == selectedIndex ? "lightBlue" : "transparent",
                  fontSize: "1rem",
                  padding: ".5rem",
                  borderRadius: "5px",
                  width: "35rem",
                  marginBottom: ".5rem",
                  border: "solid 1px gray",
                  cursor: "pointer",
                }}
                key={index}
                onMouseOver={() => setName(e)}
              >
                {e}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteOffline;

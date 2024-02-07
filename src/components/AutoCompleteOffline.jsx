import React, { useEffect, useRef, useState } from "react";

const AutoCompleteOffline = () => {
  const [name, setName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antigua & Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia & Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central Arfrican Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Cote D Ivoire",
    "Croatia",
    "Cuba",
    "Curacao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Polynesia",
    "French West Indies",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauro",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Pierre & Miquelon",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "St Kitts & Nevis",
    "St Lucia",
    "St Vincent",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor L'Este",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks & Caicos",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (US)",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

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

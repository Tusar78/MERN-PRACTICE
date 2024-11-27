import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisited }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="country-item">
        <img src={country.flags.png} alt="" />
        <h2>{country.name.common}</h2>
        <button onClick={() => handleVisited(country)}>Click</button>
        <button onClick={handleToggle}>Toggle</button>
        <p>{toggle ? "I visited" : "I want"}</p>
      </div>
    </>
  );
};

export default Country;

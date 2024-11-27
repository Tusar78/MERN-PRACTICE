import React, { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countries, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  const [visited, setVisited] = useState([]);

  const handleVisited = (country) => {
    const newC = [...visited, country];
    setVisited(newC);
  };

  return (
    <>
        <ul>
        {visited.map(n => <li>{n.name.common}</li>)}
        </ul>

      <div className="country-list">
        {countries.map((country, idx) => (
          <Country handleVisited={handleVisited} country={country} key={idx} />
        ))}
      </div>
    </>
  );
};

export default Countries;

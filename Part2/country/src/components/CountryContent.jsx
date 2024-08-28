import React from "react";

const CountryContent = ({ country }) => {
  return (
    <div>
        <p>THE ULKE</p>
        <h1>{country[0].name.common}</h1>
        <p>capital {country[0].capital}</p>
        <p>area {country[0].population}</p>
        <h2>Languages:</h2>
        <ul>
          {Object.entries(country[0].languages).map(item => {
            return (<li key={item+Math.floor(Math.random()* 101)}>{item}</li>)
          }) }
        </ul>
        <img src={country[0].flags.png} alt={country[0].flags.alt} width="200px" />
        </div>
  );
};

export default CountryContent;

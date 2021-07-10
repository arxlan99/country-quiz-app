import React, { useState } from "react";
import axios from "axios";

const GetCity = () => {
  const [capital, setCapital] = useState("");
  const [country, setCountry] = useState("");

  function changeCity() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(function (response) {
        const randNumber = Math.floor(Math.random() * 250);
        setCountry(response.data[randNumber].name);
        setCapital(response.data[randNumber].capital);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <p>{capital}</p>
      <p>{country}</p>
      <button onClick={changeCity}>Get City</button>
    </div>
  );
};

export default GetCity;

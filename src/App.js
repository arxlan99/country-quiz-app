import React, { useState } from "react";
import axios from "axios";
import Options from "./components/Options";
import Question from "./components/Question";
import Cards from "./components/UI/Cards";

const App = () => {
  const [capital, setCapital] = useState("");
  const [country1, setCountry1] = useState("");
  const [country2, setCountry2] = useState("");
  const [country3, setCountry3] = useState("");
  const [country4, setCountry4] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  function changeCity() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(function (response) {
        const randNumber = Math.floor(Math.random() * 4) + 1;
        const randomCountry1 = Math.floor(Math.random() * 250);
        const randomCountry2 = Math.floor(Math.random() * 250);
        const randomCountry3 = Math.floor(Math.random() * 250);
        const randomCountry4 = Math.floor(Math.random() * 250);

        setCountry1(response.data[randomCountry1].name);
        setCountry2(response.data[randomCountry2].name);
        setCountry3(response.data[randomCountry3].name);
        setCountry4(response.data[randomCountry4].name);

        switch (randNumber) {
          case 1:
            setCapital(response.data[randomCountry1].capital);
            setSelectedCountry(response.data[randomCountry1].name);
            break;
          case 2:
            setCapital(response.data[randomCountry2].capital);
            setSelectedCountry(response.data[randomCountry2].name);
            break;
          case 3:
            setCapital(response.data[randomCountry3].capital);
            setSelectedCountry(response.data[randomCountry2].name);
            break;
          case 4:
            setCapital(response.data[randomCountry4].capital);
            setSelectedCountry(response.data[randomCountry2].name);
            break;
          default:
            break;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Cards>
        {capital === "" && <button onClick={changeCity}>Start</button>}

        {capital !== "" && (
          <React.Fragment>
            {" "}
            <Question capital={capital} />{" "}
            <Options
              country1={country1}
              country2={country2}
              country3={country3}
              country4={country4}
            />
            <p>{selectedCountry}</p>
            <button className="float-end btn btn-primary" onClick={changeCity}>
              Next
            </button>
          </React.Fragment>
        )}
      </Cards>
    </div>
  );
};

export default App;

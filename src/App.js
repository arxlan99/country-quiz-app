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
  const [totalAnswer, setTotalAnswer] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [getAllItems, setGetAllItems] = useState("");

  function getAllJson() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(function (response) {
        setGetAllItems(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function changeCity(e) {
    var correctBtn = document.getElementsByClassName("btn-outline-info")[0];
    var allDangerBtn = document.getElementsByClassName("btn-outline-danger")[0];
    if (correctBtn !== undefined) {
      correctBtn.classList.add("btn-outline-danger");
      allDangerBtn.classList.remove("btn-outline-info");
    }

    const randNumber = Math.floor(Math.random() * 4) + 1;
    const randomCountry1 = Math.floor(Math.random() * 250);
    const randomCountry2 = Math.floor(Math.random() * 250);
    const randomCountry3 = Math.floor(Math.random() * 250);
    const randomCountry4 = Math.floor(Math.random() * 250);

    setCountry1(getAllItems.data[randomCountry1].name);
    setCountry2(getAllItems.data[randomCountry2].name);
    setCountry3(getAllItems.data[randomCountry3].name);
    setCountry4(getAllItems.data[randomCountry4].name);

    setShowResult(false);

    switch (randNumber) {
      case 1:
        setCapital(getAllItems.data[randomCountry1].capital);
        setSelectedCountry(getAllItems.data[randomCountry1].name);
        break;
      case 2:
        setCapital(getAllItems.data[randomCountry2].capital);
        setSelectedCountry(getAllItems.data[randomCountry2].name);
        break;
      case 3:
        setCapital(getAllItems.data[randomCountry3].capital);
        setSelectedCountry(getAllItems.data[randomCountry2].name);
        break;
      case 4:
        setCapital(getAllItems.data[randomCountry4].capital);
        setSelectedCountry(getAllItems.data[randomCountry2].name);
        break;
      default:
        break;
    }
  }

  function nextQuestion() {
    document.getElementById("nextQuestion").click();
  }

  return (
    <div>
      <Cards>
        {getAllItems === "" && <button onClick={getAllJson}>Start</button>}
        {getAllItems !== "" && capital === "" && (
          <button onClick={changeCity}>Get Question</button>
        )}

        {capital !== "" && showResult === false && (
          <React.Fragment>
            {" "}
            <Question capital={capital} />{" "}
            <Options
              answer={selectedCountry}
              country1={country1}
              country2={country2}
              country3={country3}
              country4={country4}
              setNextQuestion={nextQuestion}
              setShowResult={setShowResult}
              setTotalAnswer={setTotalAnswer}
              totalAnswer={totalAnswer}
            />
            <button
              id="nextQuestion"
              className="float-end btn btn-primary"
              onClick={changeCity}
            >
              Next
            </button>
          </React.Fragment>
        )}
        {showResult === true && (
          <React.Fragment>
            <h1> Total correct answers : {totalAnswer} </h1>
            <button onClick={changeCity}>Start Again</button>
          </React.Fragment>
        )}
      </Cards>
    </div>
  );
};

export default App;

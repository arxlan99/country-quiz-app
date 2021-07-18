import React, { useState } from "react";

const Options = (props) => {
  const [totalQuestions, setTotalQuestions] = useState(4);
  function controlOptions(e) {
    const text = e.target.innerText;
    if (text === props.answer) {
      e.target.classList.remove("btn-outline-danger");
      e.target.classList.add("btn-outline-info");
      alert("Succesful!!!");
      props.setTotalAnswer(props.totalAnswer + 1);
      setTotalQuestions(totalQuestions - 1);
      props.setNextQuestion();
    } else {
      alert("answer is wrong");
      setTotalQuestions(totalQuestions - 1);
      props.setNextQuestion();
    }
    console.log(totalQuestions);
    if (totalQuestions === 0) {
      props.setShowResult(true);
    }
  }

  return (
    <div className="row">
      <button
        type="button"
        className="btn btn-outline-danger  mt-2"
        onClick={controlOptions}
      >
        {props.country1}
      </button>
      <button
        type="button"
        className="w-100 btn btn-outline-danger mt-2"
        onClick={controlOptions}
      >
        {props.country2}
      </button>
      <button
        type="button"
        className="w-100 btn btn-outline-danger mt-2"
        onClick={controlOptions}
      >
        {props.country3}
      </button>
      <button
        type="button"
        className="w-100 btn btn-outline-danger mt-2"
        onClick={controlOptions}
      >
        {props.country4}
      </button>
      <p> {props.answer}</p>
    </div>
  );
};

export default Options;

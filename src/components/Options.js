import React, { useState } from "react";

const Options = (props) => {
  const [total, setTotal] = useState(0);
  function controlOptions(e) {
    const text = e.target.innerText;
    if (text === props.answer) {
      e.target.classList.remove("btn-outline-danger");
      e.target.classList.add("btn-outline-info");
      alert("Succesful!!!");
      setTotal(total + 1);
      console.log(total);
    } else {
      alert("answer is wrong");
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

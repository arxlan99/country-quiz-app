import React from "react";

const Options = (props) => {
  return (
    <div className="row">
      <button type="button" className="btn btn-outline-danger  mt-2">
        {props.country1}
      </button>
      <button type="button" className="w-100 btn btn-outline-danger mt-2">
        {props.country2}
      </button>
      <button type="button" className="w-100 btn btn-outline-danger mt-2">
        {props.country3}
      </button>
      <button type="button" className="w-100 btn btn-outline-danger mt-2">
        {props.country4}
      </button>
    </div>
  );
};

export default Options;

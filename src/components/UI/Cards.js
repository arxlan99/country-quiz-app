import React from "react";

const Cards = (props) => {
  return (
    <div
      style={{ width: "660px" }}
      className="card position-absolute top-50 start-50 translate-middle"
    >
      <div class="card-body">{props.children}</div>
    </div>
  );
};

export default Cards;

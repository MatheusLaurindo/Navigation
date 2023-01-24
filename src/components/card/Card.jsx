import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="container">
        <h2>
          <b>{props.title}</b>
        </h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Card;

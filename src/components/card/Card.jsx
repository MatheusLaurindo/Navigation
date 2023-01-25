import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="container">
        <h2>
          <a href="?">{props.title}</a>
        </h2>
        <h5>{props.subtitle}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default Card;

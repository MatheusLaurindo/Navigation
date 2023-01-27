import React from "react";
import "./Button.css";

function Button(props) {
  const style = {
    backgroundColor: props.color,
  };

  return (
    <div className="button-area">
      <button className="btn-itself" type={props.type} style={style}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;

import React from "react";
import "./Input.css";

function Input(props) {
  return (
    <div className="input-field">
      <label className="input-label">{props.label}</label>
      <div>
        <input
          className="input-itself"
          label={props.label}
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.setAction}
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default Input;

import React from "react";
import "./SectionTitle.css";

function SectionTitle(props) {
  return (
    <div className="section-title">
      <h1 className="title">{props.title}</h1>
      <span>{props.subtitle}</span>
      <span className="border"></span>
    </div>
  );
}

export default SectionTitle;

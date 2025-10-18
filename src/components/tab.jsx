import React from "react";

export default function Tab(props) {
  console.log(props.on);


  return (
    <button
      style={{ backgroundColor: props.color }}
      className={props.on ? "on" : "off"}
      onClick={() => props.byClick(props.id)}
    >
      {props.id}-{props.text}
    </button>
  );
}

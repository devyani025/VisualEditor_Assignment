import React, { useState } from 'react';

const Editable = (props) => {
 
  return (
    <div id={props.id} class={`editable ${props.type == "string" ? "longEditable" : ""}`}>
      <input
        type={props.type ? props.type : "number"}
        value={props.text}
        onChange={(e)=>{props.onchange(e)}}
        className="rounded-input"
      />
    </div>
  );
};

export default Editable;

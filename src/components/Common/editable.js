import React, { useState } from 'react';

const Editable = (props) => {
 

  return (
    <div id={props.id} class='editable'>
      <input
        type="number"
        value={props.text}
        onChange={(e)=>{props.onchange(e)}}
        className="rounded-input"
      />
  
    </div>
  );
};

export default Editable;

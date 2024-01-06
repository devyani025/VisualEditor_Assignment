import React, { useState } from 'react';

const Dropdown = (props) => {
 

  return (
    <div id={props.id}>
      <select
        id="selectDropdown"
        value={props.selectedOption}
        onChange={(e)=>{props.onchange(e)}}
        className='dropdownStyle'
      >  
        <option value="mouse">mouse pointer</option>
        <option value="random">random position</option>
      </select>
    </div>
  );
};

export default Dropdown;

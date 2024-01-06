import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
        className='dropdownStyle'
      >  
        <option value="mouse pointer">mouse pointer</option>
        <option value="random position">random position</option>
      </select>
    </div>
  );
};

export default Dropdown;

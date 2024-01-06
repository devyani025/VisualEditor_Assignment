import React, { useState } from 'react';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select an option:</label>
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default Dropdown;

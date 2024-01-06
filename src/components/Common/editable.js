import React, { useState } from 'react';

const Editable = () => {
  const [text, setText] = useState('Edit me!');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div class="widthHeight">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        className="rounded-input"
      />
  
    </div>
  );
};

export default Editable;

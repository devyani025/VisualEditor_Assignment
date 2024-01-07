import React from 'react';

const Cloud = ({ text, position }) => {
  return (
    <div className={'speech'} id={"cloud"}>
      <span className="text-black font-bold">{text}</span>
    </div>
  );
};

export default Cloud;

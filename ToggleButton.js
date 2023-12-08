
import React, { useState } from 'react';

const ToggleButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  const getMessage = () => {
    return clickCount % 2 === 0 ? 'Not Clicked' : 'Clicked';
  };

  return (
    <div>
      <button onClick={handleClick}>{getMessage()}</button>
    </div>
  );
};

export default ToggleButton;

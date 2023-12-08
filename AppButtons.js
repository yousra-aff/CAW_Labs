
import React, { useState } from 'react';

const App = () => {
  const [clickCounts, setClickCounts] = useState({
    Button1: 0,
    Button2: 0,
    Button3: 0,
  });

  const handleButtonClick = (buttonName) => {
    setClickCounts((prevCounts) => ({
      ...prevCounts,
      [buttonName]: prevCounts[buttonName] + 1,
    }));
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('Button1')}>Button1</button>
      <button onClick={() => handleButtonClick('Button2')}>Button2</button>
      <button onClick={() => handleButtonClick('Button3')}>Button3</button>

      {Object.keys(clickCounts).map((buttonName, index) => (
        <p key={index}>{`Button #${index + 1} was clicked ${clickCounts[buttonName]} times.`}</p>
      ))}
    </div>
  );
};

export default App;

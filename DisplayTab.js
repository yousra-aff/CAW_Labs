
import React, { useState } from 'react';

const DisplayTab = ({ table }) => {
  const [tab, setTab] = useState(table);

  const handleItemClick = (index) => {
    const newTab = [...tab];
    newTab.splice(index, 1);
    setTab(newTab);
  };

  return (
    <div>
      <h2>Question 1: Display Table as Unordered List</h2>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Question 2: Display Table with Element Numbers</h2>
      <ul>
        {tab.map((item, index) => (
          <li key={index}>{`Element ${index + 1} is: ${item}`}</li>
        ))}
      </ul>

      <h2>Question 3: Display Table with Click Event</h2>
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleItemClick(index)}>
            {`Element ${index + 1} is: ${item}`}
          </li>
        ))}
      </ul>

      <h2>Question 4: Parameterized DisplayTab Component by Props</h2>
      <ul>
        {table.map((item, index) => (
          <li key={index}>{`Element ${index + 1} is: ${item}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTab;

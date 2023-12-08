
import React, { useState } from 'react';

const DynamicDivForm = () => {
  const [divStyle, setDivStyle] = useState({
    width: '100px',
    height: '100px',
    backgroundColor: '#e0e0e0',
  });

  const [newDivStyle, setNewDivStyle] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDivStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDivStyle({
      width: newDivStyle.width || '100px',
      height: newDivStyle.height || '100px',
      backgroundColor: newDivStyle.backgroundColor || '#e0e0e0',
    });
  };

  return (
    <div>
      <h2>Add Dynamic Div</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Width:
          <input
            type="text"
            name="width"
            value={newDivStyle.width}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Height:
          <input
            type="text"
            name="height"
            value={newDivStyle.height}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={newDivStyle.backgroundColor}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div style={divStyle}></div>
    </div>
  );
};

export default DynamicDivForm;

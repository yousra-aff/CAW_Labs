
import React from 'react';
import ButtonWithClick from './ButtonWithClick';
import ToggleButton from './ToggleButton';
import Counter from './counter';
import AppButtons from './AppButtons';

const App = () => {
  return (
    <div>
      <h2>Button with Click</h2>
      <ButtonWithClick />

      <h2>Toggle Button</h2>
      <ToggleButton />

      <h2>Counter</h2>
      <Counter />

      <h2>App Buttons</h2>
      <AppButtons />
    </div>
  );
};

export default App;

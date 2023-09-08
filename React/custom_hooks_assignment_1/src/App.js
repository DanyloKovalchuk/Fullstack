// useKeyPress - is a hook that listens to keyboard key presses and returns a pressed key or a boolean value
//  indicating whether a specific key is being pressed.

import React from "react";
import useKeyPress from "./useKeyPress";

const App = () => {
  const isEnterPressed = useKeyPress('Enter');

  return (
    <div>
      <p>Press the 'Enter' key</p>
      {isEnterPressed && <p>'Enter' key is pressed!</p>}
    </div>
  );
};

export default App;

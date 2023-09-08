// React component testing
// jest-dom library provides utilities to perform react testing.
// jest installation: npm install jest-environment-jsdom --save-dev
// command to run tests: npm test
// comman imports for Jest library
// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter initialValue={0} /> 
    </div>
  );
}

export default App;

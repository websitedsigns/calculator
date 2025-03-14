// src/App.tsx
import React from 'react';
import Calculator from './components/Calculator';
import './index.css'; // Import the new CSS file

const App: React.FC = () => {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
};

export default App;

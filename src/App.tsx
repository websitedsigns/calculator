import React, { useState } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Calculator</h1>
      <div>
        <input
          type="text"
          value={input}
          readOnly
          style={{ width: '200px', height: '40px', fontSize: '20px', marginBottom: '10px' }}
        />
      </div>
      <div>
        <div>
          <button onClick={() => handleButtonClick('7')} style={buttonStyle}>7</button>
          <button onClick={() => handleButtonClick('8')} style={buttonStyle}>8</button>
          <button onClick={() => handleButtonClick('9')} style={buttonStyle}>9</button>
          <button onClick={() => handleButtonClick('/')} style={buttonStyle}>/</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('4')} style={buttonStyle}>4</button>
          <button onClick={() => handleButtonClick('5')} style={buttonStyle}>5</button>
          <button onClick={() => handleButtonClick('6')} style={buttonStyle}>6</button>
          <button onClick={() => handleButtonClick('*')} style={buttonStyle}>*</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('1')} style={buttonStyle}>1</button>
          <button onClick={() => handleButtonClick('2')} style={buttonStyle}>2</button>
          <button onClick={() => handleButtonClick('3')} style={buttonStyle}>3</button>
          <button onClick={() => handleButtonClick('-')} style={buttonStyle}>-</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('0')} style={buttonStyle}>0</button>
          <button onClick={() => handleButtonClick('.')} style={buttonStyle}>.</button>
          <button onClick={() => handleButtonClick('C')} style={buttonStyle}>C</button>
          <button onClick={() => handleButtonClick('+')} style={buttonStyle}>+</button>
        </div>
        <div>
          <button onClick={() => handleButtonClick('=')} style={{ ...buttonStyle, width: '200px' }}>=</button>
        </div>
      </div>
      <div>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  width: '50px',
  height: '50px',
  fontSize: '20px',
  margin: '5px',
};

export default App;
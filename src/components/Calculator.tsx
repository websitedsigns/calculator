import React, { useState } from 'react';
import Button from './Button';

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const sanitizedInput = input.replace(/×/g, '*').replace(/÷/g, '/');
        setResult(eval(sanitizedInput).toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else if (value === '%') {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === '.') {
      const lastNumber = input.split(/[+\-*/]/).pop();
      if (!lastNumber?.includes('.')) {
        setInput((prev) => prev + '.');
      }
    } else if (value === 'C') {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      {/* Display */}
      <div className="display">
        <input
          type="text"
          value={input}
          readOnly
        />
        <div className="result">
          {result && `= ${result}`}
        </div>
      </div>

      {/* Button Grid */}
      <div className="button-grid">
        {/* Special Buttons */}
        <Button value="AC" onClick={handleButtonClick} className="clear" />
        <Button value="C" onClick={handleButtonClick} className="clear" />
        <Button value="%" onClick={handleButtonClick} className="operator" />
        <Button value="÷" onClick={handleButtonClick} className="operator" />

        {/* Number Buttons */}
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="×" onClick={handleButtonClick} className="operator" />

        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} className="operator" />

        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="+" onClick={handleButtonClick} className="operator" />

        {/* Zero and Decimal Buttons */}
        <Button value="0" onClick={handleButtonClick} className="zero" />
        <Button value="." onClick={handleButtonClick} />
        <Button value="=" onClick={handleButtonClick} className="equals" />
      </div>
    </div>
  );
};

export default Calculator;
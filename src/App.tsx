import React, { useState } from 'react';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Mobile Calculator</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <input
          type="text"
          value={input}
          readOnly
          className="w-full h-12 text-right text-2xl border-2 border-gray-300 rounded-lg mb-4 px-2"
        />
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {value}
            </button>
          ))}
          {['0', '.', 'C', '+'].map((value) => (
            <button
              key={value}
              onClick={() => handleButtonClick(value)}
              className="p-4 text-xl bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {value}
            </button>
          ))}
          <button
            onClick={() => handleButtonClick('=')}
            className="col-span-4 p-4 text-xl bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            =
          </button>
        </div>
        {result && (
          <div className="mt-4 text-right text-xl">
            Result: <span className="font-bold">{result}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
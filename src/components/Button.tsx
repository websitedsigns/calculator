import React from 'react';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ value, onClick, className = '' }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className={`button ${className}`} // Dynamically adds className for specific button styles
    >
      {value}
    </button>
  );
};

export default Button;

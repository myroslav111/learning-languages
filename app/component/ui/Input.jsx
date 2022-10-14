import React from 'react';

const Input = ({ text, placeholder, type }) => {
  return (
    <label>
      {text}
      <input type={type} placeholder={placeholder} />
    </label>
  );
};

export default Input;

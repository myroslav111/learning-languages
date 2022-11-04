import { useState } from 'react';

const Input = ({
  stylesLabelProp,
  stylesInputProp,
  text,
  placeholder,
  type,
  stateFoo,
  value,
}) => {
  const recValueInput = (e, foo) => {
    foo(e.target.value);
  };

  return (
    <label className={stylesLabelProp}>
      {text}
      <input
        onChange={e => recValueInput(e, stateFoo)}
        className={stylesInputProp}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </label>
  );
};

export default Input;

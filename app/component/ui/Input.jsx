const Input = ({ stylesProps, text, placeholder, type }) => {
  return (
    <label className={stylesProps.label}>
      {text}
      <input className={stylesProps.input} type={type} placeholder={placeholder} />
    </label>
  );
};


export default Input;
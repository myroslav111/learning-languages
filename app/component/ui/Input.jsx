const Input = ({
  stylesLabelProp,
  stylesInputProp,
  text,
  placeholder,
  type,
}) => {
  return (
    <label className={stylesLabelProp}>
      {text}
      <input
        className={stylesInputProp}
        type={type}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;

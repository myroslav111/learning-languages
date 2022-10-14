import stylesInput from '../../../styles/Input.module.scss';


const Input = ({ text, placeholder, type }) => {
  return (
    // временно className={stylesInput.label}
    <label className={stylesInput.label}>
      {text}
      <input className={stylesInput.input} type={type} placeholder={placeholder} />
    </label>
  );
};

export default Input;

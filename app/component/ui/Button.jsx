import stylesBtnSubmit from '../../../styles/ButtonSubmit.module.scss';


const Button = ({ type, children }) => {
  // временный className={stylesBtnSubmit.buttonSubmit}
  return <button className={stylesBtnSubmit.buttonSubmit} type={type}>{children}</button>;
};


export default Button;
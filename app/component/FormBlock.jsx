import stylesFormBlock from '../../styles/FormBlock.module.scss';


const FormBlock = ({ children }) => {
  return <form className={stylesFormBlock.form}>{children}</form>;
};


export default FormBlock;
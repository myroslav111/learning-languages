import { formBlock } from '../../styles/FormBlock.module.scss';



const FormBlock = ({ children }) => {
  return <form className={formBlock}>{children}</form>;
};


export default FormBlock;
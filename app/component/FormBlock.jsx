import { formBlock } from '../../styles/FormBlock.module.scss';

const FormBlock = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={formBlock}>
      {children}
    </form>
  );
};

export default FormBlock;

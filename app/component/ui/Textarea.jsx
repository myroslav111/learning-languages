import { AiOutlineNotification } from 'react-icons/ai';

const Textarea = ({
  placeholder,
  styleWrapperProp,
  styleTextareaProp,
  styleIconProp,
  setValueTextareaFrom,
  value,
  disabled
}) => {
  const recValueTextarea = (e, foo) => {
    foo(e.target.value);
  };

  
  return (
    <div className={styleWrapperProp}>
      <textarea
        className={styleTextareaProp}
        value={value}
        onChange={e => recValueTextarea(e, setValueTextareaFrom)}
        rows="8"
        cols="18"
        aria-label="maximum height"
        placeholder={placeholder}
        disabled={disabled}
      ></textarea>
      <AiOutlineNotification className={styleIconProp} />
    </div>
  );
};

export default Textarea;

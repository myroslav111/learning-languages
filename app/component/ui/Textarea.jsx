import { AiOutlineNotification } from 'react-icons/ai';

const Textarea = ({
  placeholder,
  styleWrapperProp,
  styleTextareaProp,
  styleIconProp,
}) => {
  return (
    <div className={styleWrapperProp}>
      {/* textarea */}
      <textarea
        className={styleTextareaProp}
        //   value={textForTranslate}
        //   onChange={e => setTextForTranslate(e.target.value)}
        rows="8"
        cols="18"
        aria-label="maximum height"
        placeholder={placeholder}
      ></textarea>
      <AiOutlineNotification className={styleIconProp} />
    </div>
  );
};

export default Textarea;

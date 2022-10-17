import { AiOutlineNotification } from 'react-icons/ai';


const Textarea = ({placeholder, stylesProp}) => {
  return (
      <div className={stylesProp.wrapper}>
        {/* textarea */}
        <textarea
          className={stylesProp.textarea}
        //   value={textForTranslate}
        //   onChange={e => setTextForTranslate(e.target.value)}
          rows="8"
          cols="18"
          aria-label="maximum height"
          placeholder={placeholder}
        ></textarea>
      <AiOutlineNotification className={stylesProp.icon} />
      </div>

  )
}


export default Textarea;
import { useState } from 'react';

const SelectLanguage = ({ styleSelectProp, languages }) => {
  // currentLanguage нужно пробросить наверх родителю для понимания в какой массив добавлять слово в Add, или какие карточки отображать в Cards
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleChangeFrom = event => {
    setCurrentLanguage(event.target.value);
  };

  return (
    <div className={styleSelectProp}>
      <select name="select" onChange={handleChangeFrom}>
        {languages.map(leng => (
          <option value={leng.val} defaultValue>
            {leng.txt}
          </option>
        ))}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default SelectLanguage;

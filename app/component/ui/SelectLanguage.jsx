import { useState } from "react";

const SelectLanguage = () => {
  // currentLanguage нужно пробросить наверх родителю для понимания в какой массив добавлять слово в Add, или какие карточки отображать в Cards
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const handleChangeFrom = event => {
    setCurrentLanguage(event.target.value);
  };

  
  return (
    <div>
        <select name="select" onChange={handleChangeFrom}>
              <option value="en" defaultValue>EN</option>
              <option value="de">DE</option>
        </select>
    </div>
  )
}


export default SelectLanguage;




// import { useState } from "react";

// const SelectLanguage = () => {
//   const [currentLanguage, setCurrentLanguage] = useState("en");
  
  
//   return (
//     <div>
//         <select name="select">
//               <option value="en" defaultValue>EN</option>
//               <option value="de">DE</option>
//         </select>
//     </div>
//   )
// }


// export default SelectLanguage;
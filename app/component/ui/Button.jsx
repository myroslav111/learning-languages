const Button = ({
  stylesProp,
  widthbtn,
  heightbtn,
  type,
  action,
  idxCard,
  arrCards,
  cardIndex,
  children,
}) => {
  const changeCardIdx = () => {
    // console.log('cardIndexfirst', cardIndex);
    if (cardIndex + Number(action) >= 0 && action[0] === '-') {
      idxCard(prev => prev + Number(action));
    }
    if (cardIndex + Number(action) < arrCards.length && action[0] === '+') {
      idxCard(prev => prev + Number(action));
    }
    return;
  };

  return (
    <button
      data-action={action}
      className={stylesProp}
      style={{ width: `${widthbtn}`, height: `${heightbtn}` }}
      type={type}
      onClick={changeCardIdx}
    >
      {children}
    </button>
  );
};

export default Button;

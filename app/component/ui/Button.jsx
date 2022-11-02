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
    idxCard(prev => prev + Number(action));
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

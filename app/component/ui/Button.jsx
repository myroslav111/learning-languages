const Button = ({
  stylesProp,
  widthbtn,
  heightbtn,
  type,
  action,
  idxCard,
  arrCards,
  cardIndex,
  onOutlineNotificationClick,
  isEventOutlineNotification,
  onOutlineDeleteClick,
  isEventOutlineDelete,
  onMinusCircleClick,
  isEventMinusCircle,
  onOutlineSwapClick,
  isEventOutlineSwap,
  children,
}) => {
  const changeCardIdx = () => {
    if (cardIndex + Number(action) >= 0 && action[0] === '-') {
      idxCard(prev => prev + Number(action));
    }
    if (cardIndex + Number(action) < arrCards.length && action[0] === '+') {
      idxCard(prev => prev + Number(action));
    }
    return;
  }

  // кнопки на карточке
  const actionByCardsButton = (e) => {
    e.stopPropagation();
    switch (true) {
      case isEventOutlineNotification: onOutlineNotificationClick();
        
        break;
      case isEventOutlineDelete: onOutlineDeleteClick();
        
        break;
      case isEventMinusCircle: onMinusCircleClick();
        
        break;
      case isEventOutlineSwap: onOutlineSwapClick();
        
        break;
    
      default: changeCardIdx();
        break;
    }

  }
     
  return (
    <button
      data-action={action}
      className={stylesProp}
      style={{ width: `${widthbtn}`, height: `${heightbtn}` }}
      type={type}
      // onClick={isEventMinusCircle ? onMinusCircleClick : changeCardIdx}
       onClick={actionByCardsButton}

    >
      {children}
    </button>
  );
};

export default Button;

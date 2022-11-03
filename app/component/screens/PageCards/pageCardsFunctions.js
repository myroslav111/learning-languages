export const getCardsByCurrentLanguage = (
  currentLanguage,
  germanCards,
  englishCards
) => {
  if (currentLanguage === 'en') {
    return englishCards;
  }
  if (currentLanguage === 'de') {
    return germanCards;
  }
  return;
};
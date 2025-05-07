import { CardType } from '../data/fullDeck';

export function checkMatchingCards(
  cardsOnBoard: CardType[],
  latestPlayedCards: CardType[] | null
): boolean {
  // Si pas assez de cartes sur le board ou pas de cartes jouées, on considère qu'il n'y a rien à vérifier
  if (cardsOnBoard?.length < 2 || !latestPlayedCards) return true;

  const [card1, card2] = latestPlayedCards;

  if (!card1?.isOnBoard || !card2?.isOnBoard) return true;

  const isSameNumber = card1.number === card2.number;
  const isSameColor = card1.color === card2.color;

  // console.log('isSameNumber', isSameNumber, 'isSameColor', isSameColor);

  return isSameNumber || isSameColor;
}

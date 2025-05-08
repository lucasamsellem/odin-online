import { LatestPlayedCards } from '../types/GameProps';

export function checkMatchingCards(
  latestPlayedCards: LatestPlayedCards
): boolean {
  const cards = Array.isArray(latestPlayedCards)
    ? latestPlayedCards
    : [latestPlayedCards];

  if (cards.length === 0) return false;
  if (cards.length === 1) return true;

  const firstCard = cards[0];

  const allSameNumber = cards.every(
    (card) => card?.number === firstCard?.number
  );
  const allSameColor = cards.every((card) => card?.color === firstCard?.color);

  return allSameNumber || allSameColor;
}

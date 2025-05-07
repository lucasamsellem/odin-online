import { CardType } from '../data/fullDeck';

export function shuffleDeck(startingDeck: CardType[]) {
  const shuffledDeck = [...startingDeck]; // copie pour ne pas muter l'original

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
}

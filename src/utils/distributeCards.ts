import { shuffledDeck, CardType } from '../data/fullDeck';
import { CARDS_PER_PLAYER } from '../data/gameRules';

export function distributeCards(numberOfPlayers: number) {
  const playersHands: Array<CardType[]> = [];

  // Une distribution par joueur
  for (let i = 0; i < numberOfPlayers; i++) {
    const start = i * CARDS_PER_PLAYER;
    const end = start + CARDS_PER_PLAYER;
    const hand = shuffledDeck.slice(start, end);
    playersHands.push(hand);
  }

  return playersHands;
}

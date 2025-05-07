import { shuffleDeck } from '../utils/shuffleDeck';
import { CARDS_NUMBERS, CARD_COLORS } from './gameRules';
import { generateUniqueId } from '../utils/generateUniqueId';

export type CardType = {
  color: string;
  number: number;
  id: string;
  isOnBoard?: boolean;
};

export const startingDeck = Object.keys(CARD_COLORS).flatMap((color) =>
  CARDS_NUMBERS.map((number) => ({
    color,
    number,
    id: generateUniqueId(), // Generate a unique ID for each card
  }))
);

export const shuffledDeck = shuffleDeck(startingDeck);

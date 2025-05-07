export const CARDS_PER_PLAYER = 9;
export const NUMBER_OF_PLAYERS = 3;

// 9 cartes par couleurs allant de 1 à 9
export const CARDS_NUMBERS = Array.from({ length: 9 }, (_, i) => i + 1);

export const CARD_COLORS: Record<string, string> = {
  blue: '#228be6',
  red: '#c92a2a',
  pink: '#f06595',
  black: '#212529',
  orange: '#ff922b',
  green: '#2f9e44',
};

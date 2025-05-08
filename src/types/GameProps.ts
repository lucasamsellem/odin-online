export type CardType = {
  color: string;
  number: number;
  id: string;
};

export type CurrentTurn = number;
export type OnCurrentTurn = React.Dispatch<React.SetStateAction<number>>;
export type Hand = CardType[];
export type PlayerNumber = number;
export type DistributedCards = CardType[][];
export type OnCardsOnBoard = React.Dispatch<React.SetStateAction<CardType[]>>;
export type OnPlayersHand = React.Dispatch<React.SetStateAction<CardType[][]>>;
export type PlayerWarning = string;
export type OnPlayerWarning = React.Dispatch<React.SetStateAction<string>>;
export type WasBoardEmpty = boolean;
export type OnWasBoardEmpty = React.Dispatch<React.SetStateAction<boolean>>;
export type OnPlayedCardsThisTurn = React.Dispatch<
  React.SetStateAction<number>
>;
export type LatestPlayedCards = CardType[] | CardType | null;
export type CardsOnBoard = CardType[];
export type PlayedCardsThisTurn = number;

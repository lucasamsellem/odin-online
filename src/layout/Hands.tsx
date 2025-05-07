import { useState } from 'react';
import PlayerHand from '../components/PlayerHand';
import { CardType } from '../data/fullDeck';

type HandsProps = {
  currentTurn: number;
  distributedCards: CardType[][];
  onCardsOnBoard: React.Dispatch<React.SetStateAction<CardType[]>>;
  onPlayerWarning: React.Dispatch<React.SetStateAction<string>>;
  wasBoardEmpty: boolean;
  onPlayedCardsThisTurn: React.Dispatch<React.SetStateAction<number>>;
  latestPlayedCards: CardType[] | null;
  cardsOnBoard: CardType[];
};

function Hands({
  currentTurn,
  distributedCards,
  onCardsOnBoard,
  onPlayerWarning,
  wasBoardEmpty,
  onPlayedCardsThisTurn,
  latestPlayedCards,
  cardsOnBoard,
}: HandsProps) {
  const [playersHand, setPlayersHand] =
    useState<CardType[][]>(distributedCards);

  return (
    <ul className='hands-list'>
      {playersHand.map((hand, index) => (
        <li key={index}>
          <PlayerHand
            hand={hand}
            playerNumber={index}
            currentTurn={currentTurn}
            distributedCards={distributedCards}
            onCardsOnBoard={onCardsOnBoard}
            onPlayersHand={setPlayersHand}
            onPlayerWarning={onPlayerWarning}
            wasBoardEmpty={wasBoardEmpty}
            onPlayedCardsThisTurn={onPlayedCardsThisTurn}
            latestPlayedCards={latestPlayedCards}
            cardsOnBoard={cardsOnBoard}
          />
        </li>
      ))}
    </ul>
  );
}

export default Hands;

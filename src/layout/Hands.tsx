import { useState } from 'react';
import PlayerHand from '../components/PlayerHand';
import {
  CardType,
  CurrentTurn,
  DistributedCards,
  OnCardsOnBoard,
  OnPlayerWarning,
  WasBoardEmpty,
  OnPlayedCardsThisTurn,
  LatestPlayedCards,
  PlayedCardsThisTurn,
} from '../types/GameProps';

type HandsProps = {
  cardType: CardType;
  currentTurn: CurrentTurn;
  distributedCards: DistributedCards;
  onCardsOnBoard: OnCardsOnBoard;
  onPlayerWarning: OnPlayerWarning;
  wasBoardEmpty: WasBoardEmpty;
  onPlayedCardsThisTurn: OnPlayedCardsThisTurn;
  latestPlayedCards: LatestPlayedCards;
  playedCardsThisTurn: PlayedCardsThisTurn;
};

function Hands({
  currentTurn,
  distributedCards,
  onCardsOnBoard,
  onPlayerWarning,
  wasBoardEmpty,
  onPlayedCardsThisTurn,
  latestPlayedCards,
  playedCardsThisTurn,
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
            playedCardsThisTurn={playedCardsThisTurn}
          />
        </li>
      ))}
    </ul>
  );
}

export default Hands;

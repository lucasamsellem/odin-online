import { CARD_COLORS } from '../data/gameRules';
import Card from './Card';
import {
  CurrentTurn,
  OnPlayersHand,
  PlayerNumber,
  Hand,
  DistributedCards,
  OnCardsOnBoard,
  OnPlayerWarning,
  WasBoardEmpty,
  OnPlayedCardsThisTurn,
  LatestPlayedCards,
  PlayedCardsThisTurn,
} from '../types/GameProps';

type PlayerHandProps = {
  currentTurn: CurrentTurn;
  hand: Hand;
  playerNumber: PlayerNumber;
  distributedCards: DistributedCards;
  onCardsOnBoard: OnCardsOnBoard;
  onPlayersHand: OnPlayersHand;
  onPlayerWarning: OnPlayerWarning;
  wasBoardEmpty: WasBoardEmpty;
  onPlayedCardsThisTurn: OnPlayedCardsThisTurn;
  latestPlayedCards: LatestPlayedCards;
  playedCardsThisTurn: PlayedCardsThisTurn;
};

function PlayerHand({
  currentTurn,
  hand,
  playerNumber,
  distributedCards,
  onCardsOnBoard,
  onPlayersHand,
  onPlayerWarning,
  wasBoardEmpty,
  onPlayedCardsThisTurn,
  latestPlayedCards,
}: // playedCardsThisTurn,
PlayerHandProps) {
  const isCurrentTurn = currentTurn === playerNumber + 1;

  return (
    <div
      className='player-hand'
      style={{
        pointerEvents: isCurrentTurn ? 'auto' : 'none',
        userSelect: isCurrentTurn ? 'auto' : 'none',
        opacity: isCurrentTurn ? 1 : 0.3,
      }}
    >
      <h2
        className='player-name'
        style={{
          color: isCurrentTurn ? CARD_COLORS['green'] : 'black',
          fontWeight: isCurrentTurn ? 'bold' : 'normal',
        }}
      >
        Player {playerNumber + 1}
      </h2>

      <ul className='cards-list'>
        {hand.map((card) => (
          <li key={card.id}>
            <Card
              card={card}
              distributedCards={distributedCards}
              playerNumber={playerNumber}
              onCardsOnBoard={onCardsOnBoard}
              onPlayersHand={onPlayersHand}
              onPlayerWarning={onPlayerWarning}
              wasBoardEmpty={wasBoardEmpty}
              onPlayedCardsThisTurn={onPlayedCardsThisTurn}
              latestPlayedCards={latestPlayedCards}
              // playedCardsThisTurn={playedCardsThisTurn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerHand;

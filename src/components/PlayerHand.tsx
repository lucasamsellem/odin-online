import { CardType } from '../data/fullDeck';
import { CARD_COLORS } from '../data/gameRules';
import Card from './Card';

type PlayerHandProps = {
  currentTurn: number;
  hand: CardType[];
  playerNumber: number;
  distributedCards: CardType[][];
  onCardsOnBoard: React.Dispatch<React.SetStateAction<CardType[]>>;
  onPlayersHand: React.Dispatch<React.SetStateAction<CardType[][]>>;
  onPlayerWarning?: React.Dispatch<React.SetStateAction<string>>;
  wasBoardEmpty: boolean;
  onPlayedCardsThisTurn: React.Dispatch<React.SetStateAction<number>>;
  latestPlayedCards: CardType[] | null;
  cardsOnBoard: CardType[];
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
  cardsOnBoard,
}: PlayerHandProps) {
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
              cardsOnBoard={cardsOnBoard}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerHand;

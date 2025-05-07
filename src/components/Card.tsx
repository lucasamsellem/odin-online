import { CardType } from '../data/fullDeck';
import { CARD_COLORS } from '../data/gameRules';
import { checkMatchingCards } from '../utils/checkMatchingCards';

type CardProps = {
  card: CardType;
  isOnBoard?: boolean;
  distributedCards?: CardType[][];
  playerNumber?: number;
  onCardsOnBoard?: React.Dispatch<React.SetStateAction<CardType[]>>;
  onPlayersHand?: React.Dispatch<React.SetStateAction<CardType[][]>>;
  onPlayerWarning?: React.Dispatch<React.SetStateAction<string>>;
  wasBoardEmpty?: boolean;
  onPlayedCardsThisTurn?: React.Dispatch<React.SetStateAction<number>>;
  latestPlayedCards?: CardType[] | null;
  cardsOnBoard?: CardType[];
};

function Card({
  card,
  distributedCards,
  playerNumber,
  onCardsOnBoard,
  onPlayersHand,
  onPlayerWarning,
  wasBoardEmpty,
  onPlayedCardsThisTurn,
  latestPlayedCards,
  cardsOnBoard,
}: CardProps) {
  const playCard = () => {
    if (
      card.id === undefined ||
      playerNumber === undefined ||
      !distributedCards ||
      !onCardsOnBoard ||
      !onPlayersHand
    ) {
      return onPlayerWarning?.('Missing required data to play card.');
    }

    if (wasBoardEmpty) {
      return onPlayerWarning?.(
        'Cannot play more than 1 card if the board was empty.'
      );
    }

    const playedCard = distributedCards[playerNumber].find(
      ({ id }) => id === card.id
    );

    if (!playedCard) {
      return onPlayerWarning?.("Card not found in player's hand.");
    }

    const areCardsValid = checkMatchingCards(cardsOnBoard, latestPlayedCards);
    console.log('areCardsValid', areCardsValid);

    if (!areCardsValid) {
      return onPlayerWarning?.(
        'Invalid play: cards do not match in number or color.'
      );
    }

    onPlayedCardsThisTurn?.((prev) => prev + 1);

    onPlayersHand((prev) =>
      prev.map((hand, i) =>
        i === playerNumber ? hand.filter(({ id }) => id !== card.id) : hand
      )
    );

    onCardsOnBoard((prev) => [...prev, { ...playedCard, isOnBoard: true }]);
  };

  return (
    <div
      className='card'
      style={{
        backgroundColor: CARD_COLORS[card.color],
      }}
      onClick={playCard}
    >
      <span className='card-number'>{card.number}</span>
      <span className='card-number'>{card.number}</span>
    </div>
  );
}

export default Card;

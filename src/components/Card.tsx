import { CardType } from '../types/GameProps';
import { CARD_COLORS } from '../data/gameRules';
import { checkMatchingCards } from '../utils/checkMatchingCards';
import {
  DistributedCards,
  OnCardsOnBoard,
  OnPlayedCardsThisTurn,
  OnPlayersHand,
  OnPlayerWarning,
  PlayerNumber,
  WasBoardEmpty,
  LatestPlayedCards,
} from '../types/GameProps';

type CardProps = {
  card: CardType;
  distributedCards?: DistributedCards;
  playerNumber?: PlayerNumber;
  onCardsOnBoard?: OnCardsOnBoard;
  onPlayersHand?: OnPlayersHand;
  onPlayerWarning?: OnPlayerWarning;
  wasBoardEmpty?: WasBoardEmpty;
  onPlayedCardsThisTurn?: OnPlayedCardsThisTurn;
  latestPlayedCards?: LatestPlayedCards;
};

function Card({
  card,
  distributedCards,
  playerNumber,
  onCardsOnBoard,
  onPlayersHand,
  onPlayerWarning,
  wasBoardEmpty,
  // playedCardsThisTurn,
  onPlayedCardsThisTurn,
  latestPlayedCards,
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

    const playedCard = distributedCards[playerNumber].find(
      ({ id }) => id === card.id
    );

    if (!playedCard) {
      return onPlayerWarning?.("Card not found in player's hand.");
    }

    // 🔥 Vérifie ici avec la carte qu’on veut jouer
    if (latestPlayedCards) {
      const isValid = checkMatchingCards([...latestPlayedCards, playedCard]);
      if (!isValid) {
        return onPlayerWarning?.(
          'Invalid card played. Please play a card with the same number or color.'
        );
      }
    }

    if (wasBoardEmpty) {
      return onPlayerWarning?.(
        'Cannot play more than 1 card if the board was empty.'
      );
    }

    // Mise à jour des états
    onPlayedCardsThisTurn?.((prev) => prev + 1);

    onPlayersHand((prev) =>
      prev.map((hand, i) =>
        i === playerNumber ? hand.filter(({ id }) => id !== card.id) : hand
      )
    );

    onCardsOnBoard((prev) => [...prev, { ...playedCard }]);
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

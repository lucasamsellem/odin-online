import { useEffect, useRef } from 'react';
import Card from '../components/Card';
import { CardType } from '../data/fullDeck';
import { CARD_COLORS, NUMBER_OF_PLAYERS } from '../data/gameRules';
import { buildCardNumber } from '../utils/buildCardNumber';

type BoardProps = {
  cardsOnBoard: CardType[];
  currentTurn: number;
  onCurrentTurn: React.Dispatch<React.SetStateAction<number>>;
  onCardsOnBoard: React.Dispatch<React.SetStateAction<CardType[]>>;
  wasBoardEmpty: boolean;
  onWasBoardEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  latestPlayedCards: CardType[] | null;
  onPlayedCardsThisTurn: React.Dispatch<React.SetStateAction<number>>;
  // onPlayerWarning: React.Dispatch<React.SetStateAction<string>>;
};

function Board({
  cardsOnBoard,
  onCardsOnBoard,
  currentTurn,
  onCurrentTurn,
  wasBoardEmpty,
  onWasBoardEmpty,
  latestPlayedCards,
  onPlayedCardsThisTurn,
}: BoardProps) {
  const prevRoundNb = useRef<number | null>(null);
  const latestRoundNumber = latestPlayedCards?.map((card) => card.number);

  useEffect(() => {
    prevRoundNb.current = latestRoundNumber;
  }, [latestRoundNumber]);

  const triggerNextTurn = () => {
    // Reset played cards count to distinct between turns
    onPlayedCardsThisTurn(0);

    const nextTurn = currentTurn >= NUMBER_OF_PLAYERS ? 1 : currentTurn + 1;
    onCurrentTurn(nextTurn);
    onWasBoardEmpty(false);
  };

  const resetBoard = () => {
    onCardsOnBoard([]);
    onWasBoardEmpty(false);
  };

  return (
    <div className='board'>
      <header>
        <button onClick={resetBoard} className='reset-board-btn'>
          Reset board
        </button>
        <h2>Board</h2>

        <span className='lastest-played-cards-number'>
          {latestRoundNumber
            ? buildCardNumber(latestRoundNumber)
            : prevRoundNb.current}{' '}
          🔥
        </span>
      </header>

      <ul className='cards-list'>
        {Object.values(cardsOnBoard).map((card) => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>

      <button
        onClick={triggerNextTurn}
        className='next-turn-btn'
        style={{
          backgroundColor: wasBoardEmpty
            ? CARD_COLORS['red']
            : CARD_COLORS['blue'],
        }}
      >
        &#8594; Next turn
      </button>
    </div>
  );
}

export default Board;

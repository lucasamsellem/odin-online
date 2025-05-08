import { useEffect, useRef } from 'react';
import Card from '../components/Card';
import { CARD_COLORS, NUMBER_OF_PLAYERS } from '../data/gameRules';
import { buildCardNumber } from '../utils/buildCardNumber';
import {
  CardsOnBoard,
  CurrentTurn,
  LatestPlayedCards,
  OnCardsOnBoard,
  OnCurrentTurn,
  OnPlayedCardsThisTurn,
  OnPlayerWarning,
  OnWasBoardEmpty,
  WasBoardEmpty,
} from '../types/GameProps';

type BoardProps = {
  cardsOnBoard: CardsOnBoard;
  currentTurn: CurrentTurn;
  onCurrentTurn: OnCurrentTurn;
  onCardsOnBoard: OnCardsOnBoard;
  wasBoardEmpty: WasBoardEmpty;
  onWasBoardEmpty: OnWasBoardEmpty;
  latestPlayedCards: LatestPlayedCards;
  onPlayedCardsThisTurn: OnPlayedCardsThisTurn;
  onPlayerWarning: OnPlayerWarning;
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
  onPlayerWarning,
}: BoardProps) {
  const isBoardEmpty = cardsOnBoard.length === 0;

  const latestRoundNumbers = Array.isArray(latestPlayedCards)
    ? latestPlayedCards?.map((card) => card.number)
    : cardsOnBoard[0]?.number;

  const prevRoundNb = useRef<number | null>(null);

  useEffect(() => {
    prevRoundNb.current = latestRoundNumbers;
  }, [latestRoundNumbers]);

  const triggerNextTurn = () => {
    if (isBoardEmpty) {
      return onPlayerWarning('You must play a card first turn.');
    }

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
          {buildCardNumber(latestRoundNumbers)} 🔥
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
          backgroundColor: CARD_COLORS[wasBoardEmpty ? 'red' : 'blue'],
        }}
      >
        &#8594; Next turn
      </button>
    </div>
  );
}

export default Board;

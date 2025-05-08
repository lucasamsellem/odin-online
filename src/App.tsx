import Header from './layout/Header';
import { distributeCards } from './utils/distributeCards';
import Board from './layout/Board';
import { useEffect, useState } from 'react';
import { CardType } from './types/GameProps';
import { NUMBER_OF_PLAYERS } from './data/gameRules';
import Hands from './layout/Hands';
import PlayerWarningPopup from './components/PlayerWarningPopup';

function App() {
  const [cardsOnBoard, setCardsOnBoard] = useState<CardType[]>([]);
  const [playedCardsThisTurn, setPlayedCardsThisTurn] = useState<number>(0);
  const [wasBoardEmpty, setWasBoardEmpty] = useState(false);
  const [currentTurn, setCurrentTurn] = useState<number>(1);
  const [playerWarning, setPlayerWarning] = useState<string>('');

  const distributedCards = distributeCards(NUMBER_OF_PLAYERS);

  const firstCardOnBoard = cardsOnBoard[0];
  const alreadyPlayedOnEmptyBoard =
    cardsOnBoard?.length === 1 && firstCardOnBoard;

  const latestPlayedCards =
    playedCardsThisTurn === 0 ? null : cardsOnBoard.slice(-playedCardsThisTurn);

  useEffect(() => {
    if (alreadyPlayedOnEmptyBoard) setWasBoardEmpty(true);
  }, [cardsOnBoard, alreadyPlayedOnEmptyBoard]);

  return (
    <>
      <Header distributedCards={distributedCards} />

      <main>
        <Board
          cardsOnBoard={cardsOnBoard}
          onCardsOnBoard={setCardsOnBoard}
          currentTurn={currentTurn}
          onCurrentTurn={setCurrentTurn}
          wasBoardEmpty={wasBoardEmpty}
          onWasBoardEmpty={setWasBoardEmpty}
          onPlayedCardsThisTurn={setPlayedCardsThisTurn}
          latestPlayedCards={latestPlayedCards}
          onPlayerWarning={setPlayerWarning}
        />
        <Hands
          currentTurn={currentTurn}
          distributedCards={distributedCards}
          onCardsOnBoard={setCardsOnBoard}
          onPlayerWarning={setPlayerWarning}
          wasBoardEmpty={wasBoardEmpty}
          onPlayedCardsThisTurn={setPlayedCardsThisTurn}
          latestPlayedCards={latestPlayedCards}
          playedCardsThisTurn={playedCardsThisTurn}
        />
      </main>

      <PlayerWarningPopup
        playerWarning={playerWarning}
        onPlayerWarning={setPlayerWarning}
      />
    </>
  );
}

export default App;

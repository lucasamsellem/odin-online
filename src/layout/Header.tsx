import { shuffledDeck } from '../data/fullDeck';
import { DistributedCards } from '../types/GameProps';

type HeaderProps = {
  distributedCards: DistributedCards;
};

function Header({ distributedCards }: HeaderProps) {
  const distributedCardsNumber = distributedCards.reduce(
    (acc, curr) => acc + curr.length,
    0
  );

  const cardsLeftInDeck = shuffledDeck.length - distributedCardsNumber;

  return (
    <header className='game-header'>
      <h1>Odin</h1>
      <span>
        Cards left in deck: <strong>{cardsLeftInDeck}</strong>
      </span>
    </header>
  );
}

export default Header;

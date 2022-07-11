import React from 'react';
import { useCardGameContext } from './CardGameProvider';
import CardList from './CardList';
import ExecutePassButton from './ExecutePassButton';
import Player from './Player';

export default function CardGameSection() {
  const {
    deck, playerOneHand, setPlayerOneHand, selectedCard, setSelectedCard, playerTwoHand,
    setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, setFrom, to, setTo,
  } = useCardGameContext();
  return (
    <div className="section">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player to={to} player={setPlayerOneHand} hand={playerOneHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <Player to={to} player={setPlayerTwoHand} hand={playerTwoHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <Player to={to} player={setPlayerThreeHand} hand={playerThreeHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <CardList cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton />
        }
      </section>
    </div>
  );
}

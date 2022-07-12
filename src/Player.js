import React from 'react';
import CardList from './CardList';
import { useCardGameContext } from './CardGameProvider';

export default function Player({ player, hand }) {
  const {
    selectedCard, setSelectedCard, to, setTo, setFrom
  } = useCardGameContext();
  return (
    <div className={`player ${to === player ? 'selected-player' : ''}`} onClick={() => setTo(player)}>
      <p>Player {player}</p>
      <CardList
        player={player}
        cards={hand}
        setFrom={setFrom}
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard} />
      
    </div>
  );
}

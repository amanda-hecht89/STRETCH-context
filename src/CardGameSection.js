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
  
}

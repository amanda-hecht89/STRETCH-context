import React from 'react';
import Card from './Card';
import { useCardGameContext } from './CardGameProvider';

export default function ExecutePassButton() {
  const {
    passCard, from, to, selectedCard
  } = useCardGameContext();
  return (
    <div className='execute-button' onClick={() => passCard(selectedCard)}>
        Pass <Card card={selectedCard} /> from {from} to {to}
    </div>
  );
}

import { createContext, useContext, useState } from 'react';
import cardsData from './cards-data';

const CardGameContext = createContext();

export default function CardGameProvider({ children }) {
  const [deck, setDeck] = useState(cardsData);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);


  const everything = {
    deck, setDeck, playerOneHand, setPlayerOneHand, selectedCard, setSelectedCard, playerTwoHand,
    setPlayerTwoHand, playerThreeHand, setPlayerThreeHand, from, setFrom, to, setTo,
      
  };
  return <CardGameContext.Provider value={everything}>
    {children}
  </CardGameContext.Provider>;
}

export function useCardGameContext() {
  return useContext(CardGameContext);
}
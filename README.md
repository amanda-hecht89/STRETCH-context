## Context Challenge (Stretch Goal)

Branch off from `main`. 

Make a new branch called `dev`. 

Refactor the `dev` branch into a Context model.

Submit a PR.

Note that there is already a `with-context` branch. You can take a look at it if you need some guidance.





return (
    <div className="App">
      <section>
        {/* if the player names are numbers, that will make our life easier later because we can reuse numbers as arrays. Note that this will make our app brittle! */}
        <Player to={to} player={1} hand={playerOneHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <Player to={to} player={2} hand={playerTwoHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <Player to={to} player={3} hand={playerThreeHand} setFrom={setFrom} selectedCard={selectedCard} setTo={setTo} setSelectedCard={setSelectedCard} />
        <CardList cards={deck} selectedCard={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} player={'deck'} />
      </section>
      <section>
        {
          selectedCard && <ExecutePassButton passCard={passCard} from={from} to={to} selectedCard={selectedCard} />
        }
      </section>
    </div>
  );
}


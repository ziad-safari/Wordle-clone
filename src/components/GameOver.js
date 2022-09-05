import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currAttempt } = useContext(AppContext);
  console.log(gameOver.guessedWord);
  return (
    <div className='gameOver'>
      <h3>{gameOver.guessedWord ? "You got it!" : "You Failed"}</h3>
      {gameOver.guessedWord && (
        <h3>You guessed in {currAttempt.attempt} attempts</h3>
      )}
      <h1>Feel free to refresh to play again!</h1>
    </div>
  );
}

export default GameOver;

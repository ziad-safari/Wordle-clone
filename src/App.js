import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useEffect, useState } from "react";
import { boardDefault } from "./Words";
import { generateWordSet } from "./Words";
import GameOver from "./components/GameOver";
import wordBank from "./valid-wordle-words.txt";
import wordBank6 from "./6Letter.txt";
import wordBank7 from "./7letter.txt";
import wordBank8 from "./8level.txt";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letterPos: 0,
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctWord, setCorrectWord] = useState("");
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [wordLength, setWordLength] = useState(5);

  let bank;
  if (wordLength === 5) {
    bank = wordBank;
  } else if (wordLength === 6) {
    bank = wordBank6;
  } else if (wordLength === 7) {
    bank = wordBank7;
  } else if (wordLength === 8) {
    bank = wordBank8;
  }
  useEffect(() => {
    generateWordSet(bank, wordLength).then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
    });
  }, [wordLength]);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.letterPos > wordLength - 1) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  const onEnter = () => {
    if (currAttempt.letterPos !== wordLength) return;

    let currWord = "";
    for (let i = 0; i < wordLength; i++) {
      currWord += board[currAttempt.attempt][i];
    }

    if (wordSet.has(currWord.toLocaleLowerCase())) {
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
    } else {
      alert("Word Not Found");
    }
    console.log(correctWord);
    if (currWord.toLocaleLowerCase() === correctWord.toLocaleLowerCase()) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currAttempt.attempt === wordLength) {
      setGameOver({ gameOver: true, guessedWord: false });
    }
  };
  return (
    <div className='App'>
      <nav>
        <h1>Wordle</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type='button'
            style={{ width: "50px", height: "20px" }}
            onClick={() => setWordLength(5)}>
            <label>5</label>
          </button>
          <button
            type='button'
            style={{ width: "50px", height: "20px" }}
            onClick={() => setWordLength(6)}>
            <label>6</label>
          </button>
          <button
            type='button'
            style={{ width: "50px", height: "20px" }}
            onClick={() => setWordLength(7)}>
            <label>7</label>
          </button>
          <button
            type='button'
            style={{ width: "50px", height: "20px" }}
            onClick={() => setWordLength(8)}>
            <label>8</label>
          </button>
        </div>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrAttempt,
          onEnter,
          onDelete,
          onSelectLetter,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
          wordLength,
          setWordLength,
        }}>
        <div className='game'>
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;

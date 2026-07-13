import { useState } from "react";
import { ListImage } from "./Image";
import { initialListPokemon } from "./listPokemon";
import "./App.css";

function App() {
  const [listPokemon, setListPokemon] = useState(initialListPokemon);
  const [clickArray, setClickArray] = useState([]);
  const [highestScore, setHighestScore] = useState(0);

  const handleGridClick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const btnId = btn.dataset.id;
    if (clickArray.includes(btnId)) {
      if (clickArray.length > highestScore) {
        setHighestScore(clickArray.length);
      }
      setClickArray([]);
    } else if (clickArray.length === listPokemon.length - 1) {
      alert("You win!");
      setHighestScore(clickArray.length + 1);
      setClickArray([]);
    } else {
      setClickArray((prev) => [...prev, btnId]);
    }

    const newListPokemon = shuffle(listPokemon);
    setListPokemon(newListPokemon);
  };

  const shuffle = (originalArray) => {
    const shuffledCopy = [...originalArray];
    for (let i = shuffledCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCopy[i], shuffledCopy[j]] = [shuffledCopy[j], shuffledCopy[i]];
    }
    return shuffledCopy;
  };

  return (
    <>
      <div className="app-container">
        <header>
          <div className="upper-container">
            <h1>Memory Card Game</h1>
            <div className="record">
              <h2>Score: {clickArray.length}</h2>
              <h2>Best Score: {highestScore}</h2>
            </div>
          </div>
          <h3>
            Get points by clicking on an image but don't click on any more than
            once!
          </h3>
        </header>
        <main>
          <ListImage
            data={listPokemon}
            onClickBtn={handleGridClick}
          ></ListImage>
        </main>
      </div>
    </>
  );
}

export default App;

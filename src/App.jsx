// import { useEffect, useState } from "react";
import { ListImage } from "./Image";
import { listPokemon } from "./listPokemon";
import "./App.css";

function App() {
  const handleGridClick = (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    const btnId = btn.dataset.id;
    console.log("Clicked:", btnId);
  };

  return (
    <>
      <div className="app-container">
        <header>
          <div className="upper-container">
            <h1>Memory Card Game</h1>
            <div className="record">
              <h2>Score: 0</h2>
              <h2>Best Score: 0</h2>
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

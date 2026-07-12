import { useEffect, useState } from "react";
import { Image } from "./Image";
// import { listPokemon } from "./listPokemon";
import "./App.css";

function App() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    async function getPokeImg() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/pikachu",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const pokeImg = await response.json();
        setImgSrc(pokeImg.sprites.front_default);
      } catch (error) {
        console.error("Error fetching the image:", error);
      }
    }
    getPokeImg();
  }, []);

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
          <Image imgSrc={imgSrc}></Image>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
          <div>
            <img></img>
            <p>hi</p>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

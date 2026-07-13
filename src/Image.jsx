import { useEffect, useState } from "react";

export function ListImage(props) {
  return (
    <ul onClick={props.onClickBtn}>
      {props.data.map((pokemonItem) => {
        return <Image key={pokemonItem.name} name={pokemonItem.name} />;
      })}
    </ul>
  );
}

function Image({ name }) {
  const [imgSrc, setImgSrc] = useState(null);
  const nameLower = name.toLowerCase();
  useEffect(() => {
    async function getPokeImg() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + nameLower,
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
  }, [nameLower]);
  return (
    <li>
      <button type="button" data-id={nameLower}>
        <img src={imgSrc} alt={name}></img>
        <p>{name}</p>
      </button>
    </li>
  );
}

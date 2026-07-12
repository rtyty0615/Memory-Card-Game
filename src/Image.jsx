import { useEffect, useState } from "react";

export function ListImage(props) {
  return (
    <ul>
      {props.data.map((pokemonItem) => {
        return <Image key={pokemonItem.id} name={pokemonItem.name} />;
      })}
    </ul>
  );
}

export function Image({ name }) {
  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    async function getPokeImg() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase(),
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
  }, [name]);
  return (
    <li>
      <img src={imgSrc}></img>
      <p>{name}</p>
    </li>
  );
}

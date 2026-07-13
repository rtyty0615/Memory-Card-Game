export function ListImage(props) {
  return (
    <ul onClick={props.onClickBtn}>
      {props.data.map((pokemonItem) => {
        return (
          <Image
            key={pokemonItem.name}
            name={pokemonItem.name}
            imgSrc={pokemonItem.imgSrc}
          />
        );
      })}
    </ul>
  );
}

function Image({ name, imgSrc }) {
  return (
    <li>
      <button type="button" data-id={name.toLowerCase()}>
        <img src={imgSrc} alt={name}></img>
        <p>{name}</p>
      </button>
    </li>
  );
}

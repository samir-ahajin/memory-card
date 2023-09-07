/* eslint-disable react/prop-types */
export default function Card({ key, pokemon, shufflePokemon }) {
  return (
    <>
      <li
        onClick={() => {
          shufflePokemon(pokemon.uID);
        }}
        key={key}
        className="card"
      >
        <div className="card-image center">
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className="card-details ">
          <ul>
            <li className="p-name center">{pokemon.name}</li>
            <li className="center">
              <span>Pokédex : </span>
              {pokemon.id}
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}

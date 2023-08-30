import { useState } from "react";
import GetAPokemon from "./Pokemon";
import { useEffect } from "react";

export default function RenderGame({ difficulty, changeGameStatus }) {
  const pokemonTotal = 6 * difficulty;
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [pokemonGuesses, setPokemonGuesses] = useState([]);
  const [gameLose, setGameLose] = useState(false);
  const [points, setPoints] = useState(0);

  const getUniqueNumber = (range, length) => {
    const number = [];

    for (let index = 0; index < length; index++) {
      const randomId = Math.floor(Math.random() * range) + 1;
      if (number.includes(randomId)) {
        index -= 1;
      } else {
        number.push(randomId);
      }
    }
    return number;
  };

  useEffect(() => {
    const generatePokemons = async () => {
      let pokemons = [];
      //809 is upto 7th gen id numbers
      let randomId = getUniqueNumber(809, pokemonTotal);

      for (let index = 0; index < pokemonTotal; index++) {
        const shinyStat = Math.random() < 0.1;
        const newPokemon = GetAPokemon(
          {
            id: randomId[index],
            shiny: shinyStat,
          },
          [randomPokemons]
        );

        pokemons.push(newPokemon);
      }

      return await Promise.all(pokemons)
        .then((results) => {
          {
            setRandomPokemons(results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    generatePokemons();
  }, [pokemonTotal]);

  const shufflePokemon = (selected) => {
    console.log(selected);
    if (pokemonGuesses.includes(selected)) {
      console.log("lose");
      setGameLose(true);
    } else {
      setPoints(points + 1);
      setPokemonGuesses([...pokemonGuesses, selected]);
      const randomArray = getUniqueNumber(
        randomPokemons.length,
        randomPokemons.length
      );
      const pokemons = randomPokemons;
      const temp = [];
      for (let index = 0; index < pokemons.length; index++) {
        temp.push(pokemons[randomArray[index] - 1]);
      }

      setRandomPokemons([...temp]);
    }
  };
  return (
    <>
      {pokemonTotal}
      <br />
      {points}
      {points === pokemonTotal ? (
        <h1>You win</h1>
      ) : gameLose ? (
        <h1>You Lose</h1>
      ) : (
        <ul>
          {randomPokemons.map((poke) => {
            return (
              <li
                onClick={() => {
                  shufflePokemon(poke.id);
                }}
                key={poke.id}
              >
                {poke.name}
                <img src={poke.image} alt={poke.name} />
              </li>
            );
          })}
        </ul>
      )}

      <button
        onClick={() => {
          changeGameStatus(false);
        }}
      >
        Reset
      </button>
    </>
  );
}

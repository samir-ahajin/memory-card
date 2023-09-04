import { useState } from "react";
import GetAPokemon from "./Pokemon";
import { useEffect } from "react";

export default function RenderGame({
  difficulty,
  resetGame,
  totalPoints,
  addPoint,
}) {
  const pokemonTotal = 2 * difficulty;
  const [currentPoints, setCurrentPoints] = useState(0);
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [pokemonGuesses, setPokemonGuesses] = useState([]);
  const [gameLose, setGameLose] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

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
    (async () => {
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

      await Promise.all(pokemons)
        .then((results) => {
          {
            setRandomPokemons(results);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [renderCount]);

  const shufflePokemon = (selected) => {
    if (pokemonGuesses.includes(selected)) {
      setGameLose(true);
    } else {
      addPoint();
      setCurrentPoints(currentPoints + 1);
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
  const continueGame = () => {
    setRandomPokemons([]);
    setRenderCount(renderCount + 1);
    setGameLose(false);
    setCurrentPoints(0);
  };

  return (
    <>
      {pokemonTotal}
      <br />
      {totalPoints}

      {currentPoints === pokemonTotal ? (
        <>
          {" "}
          <h1>You win</h1>
          <button
            onClick={() => {
              continueGame();
            }}
          >
            Continue
          </button>
        </>
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
          resetGame();
        }}
      >
        Reset
      </button>
    </>
  );
}

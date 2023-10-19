import { useState } from "react";
import GetAPokemon from "./Pokemon";
import { useEffect } from "react";
import Card from "./Card";
import Result from "./Modal";
import game2 from "../assets/soundtracks/result.mp3";
import ingame from "../assets/soundtracks/f-game.mp3";
import final from "../assets/soundtracks/gamedone.mp3";

export default function RenderGame({
  playEffect,
  changeMusic,
  difficulty,
  resetGame,
  totalPoints,
  addPoint,
}) {
  const [currentPoints, setCurrentPoints] = useState(0);
  const [randomPokemons, setRandomPokemons] = useState([]);
  const [cardShow, setCardShow] = useState(false);
  const [pokemonGuesses, setPokemonGuesses] = useState([]);
  const [gameLose, setGameLose] = useState(false);
  const [renderCount, setRenderCount] = useState(2);
  const pokemonTotal = renderCount * difficulty;

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
            setCardShow(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, [renderCount]);

  useEffect(() => {
    if (currentPoints == pokemonTotal) {
      changeMusic(game2);
    } else {
      if (gameLose == true) {
        playEffect(final);
      }
    }
  }, [currentPoints, gameLose]);

  useEffect(() => {
    setCardShow(true);
  });
  const showCards = () => {
    setTimeout(() => {
      setCardShow(false);
    }, 600);
  };
  const shufflePokemon = async (selected) => {
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
    changeMusic(ingame);
    setRandomPokemons([]);
    setRenderCount(renderCount + 1);
    setGameLose(false);
    setCurrentPoints(0);
  };

  return (
    <>
      <div className="gameboard">
        {currentPoints === pokemonTotal ? (
          <>
            <Result
              changeMusic={changeMusic}
              win={true}
              continueGame={continueGame}
              resetGame={resetGame}
            />
          </>
        ) : gameLose ? (
          <>
            <Result
              win={false}
              continueGame={continueGame}
              resetGame={resetGame}
            />
          </>
        ) : (
          <>
            <div className="scoreBoard">
              <div>
                <p>
                  Total Cards:
                  <span>{pokemonTotal}</span>
                </p>
              </div>
              <div>
                <p>
                  Score:
                  <span>{totalPoints}</span>
                </p>{" "}
              </div>
              <div>
                {" "}
                <button
                  onClick={() => {
                    resetGame();
                  }}
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="cards-container">
              {cardShow ? (
                <>
                  {" "}
                  <ul className="cards">
                    {randomPokemons.map((pokemon) => {
                      return (
                        <Card
                          key={pokemon.uID}
                          pokemon={pokemon}
                          playEffect={playEffect}
                          shufflePokemon={shufflePokemon}
                          showCards={showCards}
                        />
                      );
                    })}
                  </ul>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

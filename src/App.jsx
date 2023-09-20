import { useState } from "react";

import "./App.css";
import Selection from "./components/Selection";
import RenderGame from "./components/RenderGame";
import logo from "./assets/pokemon-logo.png";
import pokeball from "./assets/pokeball.png";
function App() {
  const [game, setGame] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);

  const changeDifficulty = (level) => {
    setDifficulty(level);
    setLevelSelected(true);
  };
  const resetGame = () => {
    setTotalPoints(0);
    setGame(false);
    setLevelSelected(false);
  };
  const addPoint = () => {
    setTotalPoints(totalPoints + 1);
  };

  return (
    <>
      <div id="main">
        {game ? (
          levelSelected ? (
            <div className="game">
              <RenderGame
                difficulty={difficulty}
                resetGame={resetGame}
                totalPoints={totalPoints}
                addPoint={addPoint}
              />
            </div>
          ) : (
            <Selection changeDifficulty={changeDifficulty} />
          )
        ) : (
          <div className="start">
            <div className="pokemon-design center">
              <div>
                <img
                  className="pokemon pokemon-logo"
                  src={logo}
                  alt="Pokemon-Logo"
                />
              </div>
              <div className="title-content center">
                <ul className="titles ">
                  <li>
                    <h1 className="game-title">MEMORY-CARD GAME</h1>
                  </li>
                  <li>
                    <img
                      className="pokemon pokeball rotate"
                      src={pokeball}
                      alt="pokeball-image"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="center">
              <div className="frame">
                <p className="line-1 anim-typewriter">
                  Please Select.<span className="cursor">|</span>
                </p>
                <div className="hidden">
                  <ul>
                    <li
                      onClick={() => {
                        setGame(true);
                      }}
                      className="selection-button"
                    >
                      Start
                    </li>
                    <li className="selection-button">Github Repo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

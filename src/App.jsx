import { useState } from "react";

import "./App.css";
import Selection from "./components/Selection";
import RenderGame from "./components/RenderGame";

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
            <RenderGame
              difficulty={difficulty}
              resetGame={resetGame}
              totalPoints={totalPoints}
              addPoint={addPoint}
            />
          ) : (
            <Selection changeDifficulty={changeDifficulty} />
          )
        ) : (
          <div className="load">
            <button
              onClick={() => {
                setGame(true);
              }}
            >
              Start
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

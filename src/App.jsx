import { useState } from "react";

import "./App.css";
import Selection from "./components/Selection";
import RenderGame from "./components/RenderGame";

function App() {
  const [game, setGame] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const changeDifficulty = (level) => {
    setDifficulty(level);
  };
  const changeGameStatus = (status) => {
    setGame(status);
  };

  return (
    <>
      <div id="main">
        {game ? (
          <RenderGame
            difficulty={difficulty}
            changeGameStatus={changeGameStatus}
          />
        ) : (
          <Selection
            changeGameStatus={changeGameStatus}
            changeDifficulty={changeDifficulty}
          />
        )}
      </div>
    </>
  );
}

export default App;

import { useState, useEffect, useRef } from "react";

import "./App.css";
import Selection from "./components/Selection";
import RenderGame from "./components/RenderGame";
import logo from "./assets/pokemon-logo.png";
import pokeball from "./assets/pokeball.png";
import playAudio from "./components/playAudio";
import intro from "./assets/soundtracks/intro_littleroot.mp3";

function App() {
  const [game, setGame] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(true);
  const [audioTrack, setAudioTrack] = useState(intro);

  useEffect(() => {
    playAudio(audioTrack, mute, "change", playing);
  }, [audioTrack, playing]);
  useEffect(() => {
    if (mute == false && playing == false) {
      setPlaying(!playing);
      playAudio(audioTrack, mute, "play", playing);
    }
    playAudio(audioTrack, mute, "mute", playing);
  }, [mute, playing]);

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

  const togglePlay = () => {
    setMute(!mute);
  };

  const changeMusic = (audio) => {
    setAudioTrack(audio);
  };
  return (
    <>
      <div id="main">
        <button
          id="play-button"
          onClick={() => {
            togglePlay();
          }}
        >
          Mute
        </button>

        {game ? (
          levelSelected ? (
            <div className="game">
              <RenderGame
                changeMusic={changeMusic}
                difficulty={difficulty}
                resetGame={resetGame}
                totalPoints={totalPoints}
                addPoint={addPoint}
              />
            </div>
          ) : (
            <Selection
              changeMusic={changeMusic}
              changeDifficulty={changeDifficulty}
            />
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

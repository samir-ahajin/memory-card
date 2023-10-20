import { useState, useEffect } from "react";

import "./App.css";
import Selection from "./components/Selection";
import RenderGame from "./components/RenderGame";
import logo from "./assets/pokemon-logo.png";
import pokeball from "./assets/pokeball.png";
import playAudio from "./components/playAudio";
import intro from "./assets/soundtracks/intro_littleroot.mp3";
import click from "./assets/soundtracks/clicked.mp3";
import audioGame from "./assets/soundtracks/f-game.mp3";
import muteImage from "./assets/mute.png";
import unmuteImage from "./assets/volume.png";

function App() {
  const [game, setGame] = useState(false);
  const [levelSelected, setLevelSelected] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [mute, setMute] = useState(true);
  const [audioTrack, setAudioTrack] = useState(intro);

  const [finalScores, setFinalScores] = useState(
    JSON.parse(localStorage.getItem("final_Scores")) || {
      easy: 0,
      medium: 0,
      hard: 0,
    }
  );

  useEffect(() => {
    localStorage.setItem("final_Scores", JSON.stringify(finalScores));
  }, [finalScores]);

  useEffect(() => {
    playAudio(audioTrack, mute, "change", playing);
  }, [audioTrack, playing]);

  useEffect(() => {
    if (mute == false && playing == false) {
      setPlaying(!playing);
      playAudio(audioTrack, mute, "play", playing);
    }
    playAudio(audioTrack, mute, "mute", playing);
  }, [mute, playing, audioTrack]);

  const changeDifficulty = (level) => {
    playEffect(click);
    changeMusic(audioGame);
    setDifficulty(level);
    setLevelSelected(true);
  };
  const resetGame = () => {
    playEffect(click);
    changeMusic(intro);
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

  function changeMusic(audio) {
    setAudioTrack(audio);
  }
  const playEffect = (audio) => {
    let effects = new Audio(audio);

    effects.play();
    effects.loop = false;
    effects.volume = 0.5;
  };
  const adjustScoreBoard = (diff) => {
    const data = JSON.parse(localStorage.getItem("final_Scores"));
    switch (diff) {
      case 1:
        if (totalPoints > data["easy"]) {
          data["easy"] = totalPoints;
        }
        break;
      case 2:
        if (totalPoints > data["medium"]) {
          data["medium"] = totalPoints;
        }
        break;
      case 3:
        if (totalPoints > data["hard"]) {
          data["hard"] = totalPoints;
        }
        break;
    }
    if (data != null) {
      setFinalScores({ ...data });
    }
  };

  return (
    <>
      <div id="main">
        <div
          className="mute"
          onClick={() => {
            togglePlay();
          }}
        >
          {mute ? (
            <img className="unmute" src={muteImage} alt="muteButton" />
          ) : (
            <img src={unmuteImage} alt="muteButton" />
          )}
        </div>

        {game ? (
          levelSelected ? (
            <div className="game">
              <RenderGame
                adjustScoreBoard={adjustScoreBoard}
                playEffect={playEffect}
                changeMusic={changeMusic}
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
                        playEffect(click);
                        setGame(true);
                      }}
                      className="selection-button"
                    >
                      Start
                    </li>
                    <a
                      href="https://github.com/samir-ahajin/memory-card"
                      target="_blank"
                    >
                      <li
                        className="selection-button"
                        onClick={() => {
                          playEffect(click);
                        }}
                      >
                        Github Repo
                      </li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>{" "}
            <div className="center">
              <div id="scores" className="frame center">
                <h1>HIGHEST SCORE</h1>
                <ul>
                  <li>
                    <p>
                      Easy:<span>{finalScores.easy}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Medium:<span>{finalScores.medium}</span>
                    </p>
                  </li>
                  <li>
                    <p>
                      Hard:<span>{finalScores.hard}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

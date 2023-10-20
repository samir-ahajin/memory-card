import loseGame from "../assets/lose.gif";
import winGame from "../assets/celebrate.gif";
export default function Result({ win, continueGame, resetGame, totalPoints }) {
  return (
    <>
      <div className="result center">
        <div className="frame ">
          {win === true ? (
            <>
              {" "}
              <div className="center">
                <div id="winner">
                  <div className="center">
                    <img className="imageResult" src={winGame} alt="winGif" />
                  </div>
                  <p className="note">
                    When you select <span className="red">CONTINUE</span> the
                    number of cards increases !
                  </p>
                </div>
              </div>
              <div className="indentation">
                <p className="line-1 anim-typewriter">
                  You win ! :)<span className="cursor">|</span>
                </p>{" "}
                <div className="hidden">
                  <ul>
                    <li
                      onClick={() => {
                        continueGame();
                      }}
                      className="selection-button"
                    >
                      Continue
                    </li>
                    <li
                      onClick={() => {
                        resetGame();
                      }}
                      className="selection-button"
                    >
                      Reset
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="center">
                <div id="winner">
                  <div className="center">
                    <img className="imageResult" src={loseGame} alt="loseGif" />
                  </div>
                  <p className="note">
                    Your final score is{" "}
                    <span className="red">{totalPoints}</span> .
                  </p>
                </div>{" "}
              </div>{" "}
              <div className="indentation">
                <p className="line-1 anim-typewriter">
                  You Lose :(<span className="cursor">|</span>
                </p>

                <div className="hidden">
                  <ul>
                    <li
                      onClick={() => {
                        resetGame();
                      }}
                      className="selection-button"
                    >
                      Reset
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

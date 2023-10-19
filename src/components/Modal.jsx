import loseGame from "../assets/lose.gif";
import winGame from "../assets/celebrate.gif";
export default function Result({ win, continueGame, resetGame }) {
  return (
    <>
      <div className="result center">
        <div className="frame ">
          {win === true ? (
            <>
              {" "}
              <div className="center">
                <img className="imageResult" src={winGame} alt="winGif" />
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
                <img className="imageResult" src={loseGame} alt="loseGif" />
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

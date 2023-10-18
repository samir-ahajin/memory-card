import intro from "../assets/soundtracks/intro_littleroot.mp3";
import ingame from "../assets/soundtracks/f-game.mp3";
import resultAudio from "../assets/soundtracks/result.mp3";
export default function Result({ changeMusic, win, continueGame, resetGame }) {
  (() => {
    if (win == true) {
      changeMusic(resultAudio);
    } else {
      changeMusic(resultAudio);
    }
  })();

  return (
    <>
      <div className="result center">
        <div className="frame ">
          {win === true ? (
            <>
              <h1>You win</h1>
              <button
                onClick={() => {
                  continueGame();
                  changeMusic(ingame);
                }}
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <h1>You Lose</h1>
              <button
                onClick={() => {
                  resetGame(intro);
                }}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

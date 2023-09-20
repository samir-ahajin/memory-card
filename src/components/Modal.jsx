export default function Result({ win, continueGame, resetGame }) {
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
                  resetGame();
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

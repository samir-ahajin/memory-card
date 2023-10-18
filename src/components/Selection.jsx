import audioGame from "../assets/soundtracks/f-game.mp3";

export default function Selection({ changeMusic, changeDifficulty }) {
  return (
    <>
      <div className=" center difficulty">
        <div className="frame ">
          <p className="line-1 anim-typewriter">
            Choose Level.<span className="cursor">|</span>
          </p>
          <div className="hidden">
            <ul>
              <li
                onClick={() => {
                  changeDifficulty(1);
                  changeMusic(audioGame);
                }}
                className="selection-button"
              >
                Easy
              </li>
              <li
                onClick={() => {
                  changeDifficulty(2);
                  changeMusic(audioGame);
                }}
                className="selection-button"
              >
                Medium
              </li>
              <li
                onClick={() => {
                  changeDifficulty(3);
                  changeMusic(audioGame);
                }}
                className="selection-button"
              >
                Hard
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

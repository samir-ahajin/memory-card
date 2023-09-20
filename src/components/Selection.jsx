export default function Selection({ changeDifficulty }) {
  return (
    <>
      <div className=" center difficulty">
        <div className="frame ">
          <p className="line-1 anim-typewriter">
            Choose Difficulty.<span className="cursor">|</span>
          </p>
          <div className="hidden">
            <ul>
              <li
                onClick={() => {
                  changeDifficulty(1);
                }}
                className="selection-button"
              >
                Easy
              </li>
              <li
                onClick={() => {
                  changeDifficulty(2);
                }}
                className="selection-button"
              >
                Medium
              </li>
              <li
                onClick={() => {
                  changeDifficulty(3);
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

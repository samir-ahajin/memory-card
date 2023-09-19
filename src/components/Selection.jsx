export default function Selection({ changeDifficulty }) {
  return (
    <>
      <div className="center">
        <div className="frame">
          <p className="line-1 anim-typewriter">
            Choose Level.<span className="cursor">|</span>
          </p>
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
    </>
  );
}

export default function Selection({ changeGameStatus, changeDifficulty }) {
  return (
    <>
      <div>
        <div className="options">
          <ul>
            <li
              onClick={() => {
                changeDifficulty(1);
              }}
            >
              Easy
            </li>
            <li
              onClick={() => {
                changeDifficulty(2);
              }}
            >
              Medium
            </li>
            <li
              onClick={() => {
                changeDifficulty(3);
              }}
            >
              Hard
            </li>
          </ul>
        </div>
        <div className="load">
          <button
            onClick={() => {
              changeGameStatus(true);
            }}
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default function Selection({ changeDifficulty }) {
  return (
    <>
      <div>
        <div className="options frame">
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

export default function Hamburger({ onClick }) {
  return (
    <div className="hamburger" onClick={onClick}>
      <img
        id="hamburger-icon"
        src="./images/hamburger_bars.svg"
        alt="hamburger icon"
        width="35"
      />
    </div>
  );
}

import hamburgerBars from "../../images/hamburger_bars.svg";

export default function Hamburger({ onClick }) {
  return (
    <div className="hamburger" onClick={onClick}>
      <img
        id="hamburger-icon"
        src={hamburgerBars}
        alt="hamburger icon"
        width="35"
      />
    </div>
  );
}

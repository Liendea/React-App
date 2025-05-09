import Component1 from "./Component1";
import Component3 from "./Component3";
import Component2 from "./Component2";

export default function Main() {
  return (
    <div className="main">
      <Component1></Component1>
      <div className="Post-Buttons">
        <Component3></Component3>
        <Component2></Component2>
      </div>
    </div>
  );
}

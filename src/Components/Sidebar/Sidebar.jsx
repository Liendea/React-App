import "./Sidebar.css";

export default function Sidebar() {
  const handleClick = (label) => (e) => {
    e.preventDefault();
    console.log(`${label} klickades`);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="side-item projekt1">
          <p onClick={handleClick("Project1")}>PROJECT 01</p>
        </div>

        <div className="side-item projekt2">
          <p onClick={handleClick("Project2")}>PROJECT 02</p>
        </div>
      </div>
    </div>
  );
}

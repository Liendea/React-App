import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Sidebar from "../src/Components/Sidebar/Sidebar.jsx";
import Main from "../src/Components/Main/Main.jsx";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="content">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;

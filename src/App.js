import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Sidebar from "../src/Components/Sidebar/Sidebar.jsx";
import Hero from "../src/Components/Hero/Hero.jsx";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="content">
        <Sidebar></Sidebar>
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;

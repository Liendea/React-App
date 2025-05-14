import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar.jsx";
import Sidebar from "../src/Components/Sidebar/Sidebar.jsx";
import Hero from "../src/Components/Hero/Hero.jsx";
import Footer from "../src/Components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="content">
        <Sidebar></Sidebar>
        <Hero></Hero>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

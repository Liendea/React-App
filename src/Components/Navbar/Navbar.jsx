import { useState } from "react";
import "./Navbar.css";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import Hamburger from "./Hamburger";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header>
      <Logo />
      <nav>
        <div className="desktop-nav">
          <Navlinks />
        </div>

        <Hamburger onClick={toggleMobileMenu} />
        <div className={`mobile-nav ${isMobileMenuOpen ? "show" : ""}`}>
          <Navlinks closeMenu={closeMobileMenu} />
        </div>
      </nav>
    </header>
  );
}

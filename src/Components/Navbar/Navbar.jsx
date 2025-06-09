import { useState, useEffect } from "react";
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

  // 🧠 Lägg till denna useEffect för att hantera scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Rensa om komponenten avmonteras
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header>
      <Logo width={180} />
      <nav>
        <div className="desktop-nav">
          <Navlinks />
        </div>

        <Hamburger onClick={toggleMobileMenu} />
        <div className={`mobile-nav ${isMobileMenuOpen ? "show" : ""}`}>
          <Navlinks
            closeMenu={closeMobileMenu}
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </div>
      </nav>
    </header>
  );
}

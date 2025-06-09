export default function Navlinks({ closeMenu, isMobileMenuOpen }) {
  const handleClick = (label) => (e) => {
    e.preventDefault();
    if (isMobileMenuOpen && typeof closeMenu === "function") {
      closeMenu();
    }
    console.log(`${label} klickades`);
  };

  return (
    <>
      <a href="#" onClick={handleClick("Home")}>
        Home
      </a>
      <a href="#" onClick={handleClick("About")}>
        About
      </a>
      <a href="#" onClick={handleClick("Contact")}>
        Contact
      </a>
    </>
  );
}

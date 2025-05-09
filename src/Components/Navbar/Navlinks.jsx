export default function Navlinks({ closeMenu }) {
  return (
    <>
      <a href="#" onClick={closeMenu}>
        Home
      </a>
      <a href="#" onClick={closeMenu}>
        About
      </a>
      <a href="#" onClick={closeMenu}>
        Contact
      </a>
    </>
  );
}

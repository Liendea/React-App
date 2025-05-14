import Navlinks from "../Navbar/Navlinks";
import "./Footer.css";
import Logo from "../Navbar/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <Logo width={100}></Logo>
        </div>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faInstagram} color="#000" />
          <FontAwesomeIcon className="icon" icon={faFacebook} color="#000" />
          <FontAwesomeIcon className="icon" icon={faTwitter} color="#000" />
        </div>
      </div>

      <div className="links">
        <Navlinks></Navlinks>
      </div>
    </footer>
  );
}

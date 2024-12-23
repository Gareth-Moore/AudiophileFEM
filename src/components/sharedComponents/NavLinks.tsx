import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="nav-links link-and-btn-text">
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li>
        <Link to="/headphones">HEADPHONES</Link>
      </li>
      <li>
        <Link to="/speakers">SPEAKERS</Link>
      </li>
      <li>
        <Link to="/earphones">EARPHONES</Link>
      </li>
    </ul>
  );
};

export default NavLinks;

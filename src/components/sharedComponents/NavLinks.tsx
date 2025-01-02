import { Link, useNavigate, Navigate } from "react-router-dom";
import { ProductCategory, useStore } from "../../store";

type Categories = "HEADPHONES" | "EARPHONES" | "SPEAKERS";

const NavLinks = () => {
  const { setCategory, setScrollToTop } = useStore();
  const navigate = useNavigate();

  function navigateToCategory(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    setScrollToTop();
    const category = e.currentTarget.dataset.category;

    const checkCategory = (value: string | undefined): value is Categories => {
      return value ? ["HEADPHONES", "SPEAKERS", "EARPHONES"].includes(value.toUpperCase()) : false;
    };
    if (checkCategory(category)) {
      setCategory(category);
      navigate("/category");
    } else {
      navigate("/home");
    }
  }

  return (
    <ul className="nav-links link-and-btn-text">
      <li>
        <Link to="/home" onClick={(e) => navigateToCategory(e)}>
          HOME
        </Link>
      </li>
      <li>
        <Link to="/category" onClick={(e) => navigateToCategory(e)} data-category="HEADPHONES">
          HEADPHONES
        </Link>
      </li>
      <li>
        <Link to="/category" onClick={(e) => navigateToCategory(e)} data-category="SPEAKERS">
          SPEAKERS
        </Link>
      </li>
      <li>
        <Link to="/category" onClick={(e) => navigateToCategory(e)} data-category="EARPHONES">
          EARPHONES
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;

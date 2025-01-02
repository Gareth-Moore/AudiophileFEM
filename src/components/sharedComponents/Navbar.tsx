import { useEffect, useState } from "react";
import NavbarLinks from "./NavLinks";
import HamburgerIconAnimated from "../elements/HamburgerIconAnimated";
import CartSVG from "../elements/CartSVG";
import ProductCategoryCard from "./ProductCategoryCard";
import Modal from "../dependantComponents/Modals/Modal";
import LogoLink from "../elements/LogoLink";
import { useStore } from "../../store";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentBreakpoint } = useStore();

  // toggle === true: toggle dropdown, toggle === false: close dropdown
  function toggleDropdownMenu(toggle: boolean) {
    isModalOpen && !isMenuOpen && toggle ? setIsModalOpen(false) : null;
    toggle ? setIsMenuOpen(!isMenuOpen) : setIsMenuOpen(false);
  }

  // toggle === true: toggle cart, toggle === false: close cart
  function toggleModal(toggle: boolean) {
    isMenuOpen && !isModalOpen && toggle ? setIsMenuOpen(false) : null;
    toggle ? setIsModalOpen(!isModalOpen) : setIsModalOpen(false);
  }

  useEffect(() => {
    // close modal / dropdown if clicking overlay background / outside dropdown
    function handleMouseDown(e: MouseEvent) {
      e.stopPropagation();
      if (isMenuOpen) {
        const navigationBar = document.querySelector(".navbar-component");
        if (navigationBar && !navigationBar.contains(e.target as Element)) {
          toggleDropdownMenu(false);
        }
      } else if (isModalOpen) {
        const modal = document.getElementById("modal");
        if (modal && (e.target as Element) === modal) {
          setIsModalOpen(false);
        }
      }
    }

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isMenuOpen, isModalOpen]);

  return (
    <nav className="navbar-component">
      <div className="container">
        <div className="sub-container">
          {/* NAVIGATION ITEMS */}
          <div className="navbar-content">
            {currentBreakpoint !== "desktop" && (
              <HamburgerIconAnimated isMenuOpen={isMenuOpen} onClickFunction={() => toggleDropdownMenu(true)} />
            )}
            <div className="logo">
              <LogoLink />
            </div>
            {currentBreakpoint === "desktop" && <NavbarLinks />}
            <div className="cart">
              <button className="cart__button" onClick={() => toggleModal(true)}>
                <CartSVG />
              </button>
            </div>
          </div>
        </div>

        {/* DROPDOWN AND MODALS */}
        <div id="menu-dropdown" className={isMenuOpen ? "show-modal" : ""}>
          <ProductCategoryCard closeNavbar={() => toggleDropdownMenu(false)} />
        </div>

        <div id="modal" className={isModalOpen ? "show-modal" : ""}>
          <Modal />
        </div>

        <div className="decorative-line mobile"></div>
      </div>
    </nav>
  );
};

export default Navbar;

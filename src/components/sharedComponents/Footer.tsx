import NavbarLinks from "./NavLinks";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import LogoLink from "../elements/LogoLink";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-component">
      <div className="footer-container">
        <div className="decorative-container">
          <div className="decorative-box"></div>
        </div>

        <div className="spacer"></div>
        <div className="logo">
          <LogoLink />
        </div>
        <nav className="links">
          <NavbarLinks />
        </nav>
        <div className="description">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="copyright">
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
        <nav className="social-links">
          <Link to="https://www.facebook.com">
            <FaFacebookSquare className="social-icons" />
          </Link>
          <Link to="https://www.x.com">
            <FaTwitterSquare className="social-icons" />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagramSquare className="social-icons" />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

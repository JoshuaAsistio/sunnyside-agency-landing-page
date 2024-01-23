import React from "react";

import sunnysideLogo from "../images/logo.svg";
import hamburgerLogo from "../images/icon-hamburger.svg";

const Header = () => {
  const [showModal, setShowModal] = React.useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 932) setShowModal(true);
    else setShowModal(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") setShowModal(true);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setShowModal(false);
  });

  return (
    <header>
      <nav className="navigation-bar">
        {/* sunnyside logo */}
        <a href="#" aria-label="homepage">
          <img src={sunnysideLogo} alt="sunnyside logo" />
        </a>

        {/* hamburger button */}
        <button
          className="menu-button"
          onClick={() => setShowModal((prevState) => !prevState)}
          aria-label="navigation menu button"
          aria-expanded={showModal ? true : false}
        >
          <img src={hamburgerLogo} alt="" />
        </button>

        {/* navigation list */}
        <ul
          className={showModal ? "links-list" : "links-list hide"}
          role="navigation menu"
        >
          <li>
            <a
              href="#about"
              className="links"
              onFocus={() => setShowModal(true)}
              onClick={() => setShowModal(false)}
              aria-hidden={showModal ? false : true}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="links"
              onFocus={() => setShowModal(true)}
              onClick={() => setShowModal(false)}
              aria-hidden={showModal ? false : true}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="links"
              onFocus={() => setShowModal(true)}
              onClick={() => setShowModal(false)}
              aria-hidden={showModal ? false : true}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="links contact"
              onFocus={() => setShowModal(true)}
              onClick={() => setShowModal(false)}
              aria-hidden={showModal ? false : true}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

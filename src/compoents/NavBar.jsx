import React, { useEffect, useState } from "react";

const NavLink = ["Home", "About", "Skills", "Work", "Contact"];
export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrollBtnActive, setIsScrollBtnActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      setIsScrollBtnActive(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <>
      <header className={`head navigation ${isMenuActive ? "active" : ""} ${isSticky ? "sticky" : ""}`}>
        <a href="/" className="brand">
          ARIJ
        </a>
        <div className={`menu-btn ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}></div>
        <div className={`navigation ${isMenuActive ? "active" : ""}`}>
          {NavLink.map((item, i) => (
            <a href={`/#${item.toLowerCase()}`} onClick={closeMenu} key={i}>
              {item}
            </a>
          ))}
        </div>
      </header>
    </>
  );
}

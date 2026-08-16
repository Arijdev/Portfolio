import React, { useEffect, useState } from "react";

const NavLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Work", href: "/#work" },
  { name: "Experience", href: "/#experience" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
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
    <header className={`head navigation ${isMenuActive ? "active" : ""} ${isSticky ? "sticky" : ""}`}>
      <a href="/#home" className="brand">
        <span className="brand-accent">&lt;</span>ARIJ<span className="brand-accent"> /&gt;</span>
      </a>

      <div className={`menu-btn ${isMenuActive ? "active" : ""}`} onClick={toggleMenu}>
        <i className={isMenuActive ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <div className={`navigation-menu ${isMenuActive ? "active" : ""}`}>
        {NavLinks.map((item, i) => (
          <a href={item.href} onClick={closeMenu} key={i} className="nav-item-link">
            {item.name}
          </a>
        ))}
        <a href="/#contact" onClick={closeMenu} className="nav-hire-btn">
          <i className="fas fa-briefcase"></i> Hire Me
        </a>
      </div>
    </header>
  );
}

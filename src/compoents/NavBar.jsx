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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <header className={`head navigation ${isMenuActive ? "active" : ""} ${isSticky ? "sticky" : ""}`}>
      <a href="/#home" className="brand" onClick={closeMenu}>
        <span className="brand-accent">&lt;</span>ARIJ<span className="brand-accent"> /&gt;</span>
      </a>

      <div className="header-right-actions">
        {/* Unified Single Theme Button */}
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
          <i className={theme === "dark" ? "fas fa-sun" : "fas fa-moon"}></i>
          <span className="theme-btn-text">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>

        {/* Hamburger Menu Toggle Icon for Mobile */}
        <div className={`menu-btn ${isMenuActive ? "active" : ""}`} onClick={toggleMenu} aria-label="Toggle Navigation Menu">
          <i className={isMenuActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>

      {/* Navigation Drawer Menu */}
      <div className={`navigation-menu ${isMenuActive ? "active" : ""}`}>
        {/* Mobile Header with Close Button */}
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Navigation</span>
          <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close Mobile Menu">
            <i className="fas fa-times"></i>
          </button>
        </div>

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

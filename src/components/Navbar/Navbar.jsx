import { useEffect, useState } from "react";
import { getTopNav } from "./data/navbars";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navClass, setNavClass] = useState("nav__menu");
  const [iconClass, setIconClass] = useState("toggler__icon");

  useEffect(() => {
    setNavItems(getTopNav());
  }, []);

  const onToggle = () => {
    setNavClass(navClass === "nav__menu" ? "nav__menu nav__collapse" : "nav__menu");
    setIconClass(iconClass === "toggler__icon" ? "toggler__icon toggle" : "toggler__icon");
  };

  const [navItems, setNavItems] = useState([]);

  return (
    <div className="nav__wrapper">
      <div className="container">
        <nav className="nav">
          <NavLink to="/">
            <a href="#" className="nav__brand">
              <img src="/ilustraciones/logo.png" alt="Logo" />
            </a>
          </NavLink>
          <ul className={navClass} style={{ listStyle: 'none', padding: 0 }}>
            {navItems.map((item) => (
              <li key={item.id} className="nav__item">
                <NavLink to={item.href} className="nav__link">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className={iconClass} onClick={onToggle}>
            <div className="line__1"></div>
            <div className="line__2"></div>
            <div className="line__3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

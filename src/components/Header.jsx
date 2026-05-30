import { useEffect, useId, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/information", label: "Information" },
  { to: "/annual-tournament", label: "Annual Tournament" },
  { to: "/women", label: "Women" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.classList.toggle("vertical-scroll", isOpen);
    return () => document.body.classList.remove("vertical-scroll");
  }, [isOpen]);

  return (
    <header className="site-header">
      <nav className="nav-fluid" aria-label="Primary navigation">
        <NavLink to="/" className="logo-decoration" onClick={() => setIsOpen(false)}>
          <img src="/images/logo.png" alt="Fleet of Foot" className="logo-image" />
        </NavLink>

        <ul id={menuId} className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-link heading-underline${isActive ? " active-link" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className={`burger ${isOpen ? "toggle" : ""}`}
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="line1" />
          <span className="line2" />
          <span className="line3" />
        </button>
      </nav>
    </header>
  );
}

import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a className="logo" href="/" aria-label="Barnabas Anyaora home">
          <img src="/images/logo.png" alt="Barnabas Anyaora logo" />
        </a>
        <button className="menu-toggle" type="button" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen} aria-controls="primary-navigation" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
        <ul className={`nav-links${isOpen ? " is-open" : ""}`} id="primary-navigation">
          {links.map((item) => {
            const active = (item.href === "/" && path === "/") || item.href === path;
            return <li key={item.label}><a href={item.href} aria-current={active ? "page" : undefined} onClick={() => setIsOpen(false)}>{item.label}</a></li>;
          })}
        </ul>
      </nav>
    </header>
  );
}

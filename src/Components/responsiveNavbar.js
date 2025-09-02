import { useState } from "react";
import "./responsive-navbar.css";
// import "./Navbar.js"; // optional if you want extra JS behavior
import { Link } from "react-router-dom";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo">Fendowed Beauty</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/" className="home-title">
          Home
        </Link>
        <Link to="/services" className="link">
          Services
        </Link>
        <Link to="/booking" className="link">
          Book Now
        </Link>
        <Link to="/dashboard" className="link">
          Dashboard
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <span className="cancel">&times;</span>
        ) : (
          <span>&#9776;</span>
        )}
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;

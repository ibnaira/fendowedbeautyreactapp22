import { Outlet, Link } from "react-router-dom";
function Navbar() {
  return (
    <header className="nav-bar--container">
      <Link to="/" className="home-title">
        <h1>Fitness and Gym</h1>
      </Link>

      <nav className="nav-bar">
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/booking" className="link">
            Book Now
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="link">
            Dashboard
          </Link>
        </li>
      </nav>
      <Outlet />
    </header>
  );
}

export default Navbar;

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav justify-content-start p-3">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "btn btn-primary me-3" : "nav-link text-primary me-3"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          isActive ? "btn btn-primary me-3" : "nav-link text-primary me-3"
        }
      >
        Profile
      </NavLink>
      <NavLink
        to="/shop"
        className={({ isActive }) =>
          isActive ? "btn btn-primary me-3" : "nav-link text-primary me-3"
        }
      >
        Shop
      </NavLink>
    </nav>
  );
}

export default Navbar;

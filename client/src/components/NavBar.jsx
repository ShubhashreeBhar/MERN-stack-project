
import { NavLink } from "react-router-dom";  // Correct the import name
import "./NavBar.css";
import { useAuth } from "../store/auth";

export const NavBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/">Shree</NavLink>  {/* Corrected */}
        </div>
        <nav>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/service">Service</NavLink></li>
            {isLoggedIn ? (
                <li>
                  <NavLink to="/logout">Logout</NavLink>
                </li>
              ) : (
                <>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">LogIn</NavLink></li>
            </>
              )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

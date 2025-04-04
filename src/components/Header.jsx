import { Link } from "wouter";
import "./header.css";

import { useUserGifs } from "../hooks/useUserGifs";

export const Header = () => {

  const { isLogged, logout } = useUserGifs()
  const handleLogout = (e) => {
    e.preventDefault();
    logout()
  }

  return (
    <header className="gf-header">
      {
        (isLogged) ? (
            <Link onClick={handleLogout} href="#" className="header-link">
              Logout
            </Link>
            ) : (
            <Link to="/login" className="header-link">
              Login
            </Link>
            )
      }
    </header>
  );
};

import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-left ">
          <img src={logo} alt="company logo"></img>
          <div className="header-title">Barma Sorig</div>
        </div>

        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/About">About Us</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Services">Services</Link>
            </li>
            <li className="header-nav-item">
              <Link to="/Gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

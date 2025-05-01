import { Link } from "react-router-dom";
import logo from "../logo.png";
import "../styles/Header.css";
import "../App.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Left Section of the Header */}
        <div className="header-left ">
          <img src={logo} alt="company logo"></img>
          <div className="header-title">
            Barma Sorig <br /> Healing Center <br />
            {/* Company Name in Dzongkha - །། །བར་མ་གསོ་རིག་ལྟེ་བ།། */}
          </div>
        </div>

        {/* Right section of the Header */}
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

          {/* Book an appointment CTA btn */}
          <div className="header-cta">
            <Link to={"/Contact"} className="btn-appointment">
              Book an Appointment
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

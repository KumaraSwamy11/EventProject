import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <p className="p">Streamline Your Scheduling</p>

      <div className="container">
        <ul className="navLinks">
          <li>
            <Link to="/createEvent">Schduler</Link>
          </li>
          <li>
            <Link to="/getEvents">Show My Schdules</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

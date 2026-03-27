import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo/logo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Filipizen Logo" className="navbar__logo" />
          <span className="navbar__name">Filipizen</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

import "./Header.scss";
import logo from "../../assets/logos/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      {/* logo link to home */}
      <Link to="/">
        <img src={logo} alt="Lush logo" className="header__logo" />
      </Link>
    </header>
  );
}

export default Header;

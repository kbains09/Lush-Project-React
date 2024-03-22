import "./Header.scss";
import logo from "../../assets/logos/logo.png";

function Header() {
  return (
    <header className="header">
      {/* logo */}
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}

export default Header;

import "../../../base.css";
import "../../design/navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="default-navbar">
      <div className="left-navbar">
        <Link to="/about">About</Link>
        <Link to="/get-your-morscore">Get Your MorScore</Link>
        <Link to="/lookup">Lookup</Link>
        <Link to="/challenge">Challenge Mode</Link>
      </div>
      <div className="title">
        <Link to="/">MorScore.com</Link>
      </div>
      <div className="right-navbar">
        <Link to="/users/login">Sign in</Link>
      </div>
    </nav>
  );
}

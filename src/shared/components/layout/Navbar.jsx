import "../../../base.css";
import "../../design/navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="default-navbar">
      <div className="left-navbar">
        <Link to="#">About</Link>
        <Link to="#">Get Your MorScore</Link>
        <Link to="#">Lookup</Link>
        <Link to="#">Challenge Mode</Link>
      </div>
      <div className="title">
        <b>MorScore.com</b>
      </div>
      <div className="right-navbar">
        <Link to="#">Sign up</Link>
      </div>
    </nav>
  );
}

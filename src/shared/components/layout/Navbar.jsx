import "../../../base.css";
import "../../design/navbar.css";
import { Link } from "react-router";

export default function Navbar() {
  // //   const { response, logout } = useAuth();
  // const isLoggedIn = !!response.?data.token; // note: "!!" = casting to boolean
  // if (isLoggedIn) {
  //     /** Return  logged in version, where sign up is replaced by
  //      * <Link to="/users/account">My account</Link>
  //      * <Link to="#" onClick = {() => logout()}>Log out</Link>
  //     */
  // }
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

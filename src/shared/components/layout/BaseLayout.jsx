import { Outlet } from "react-router";
import Navbar from "./Navbar";
/** Todo: consider adding footer? */
export default function BaseLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

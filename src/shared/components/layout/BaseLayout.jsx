import { Outlet } from "react-router";
import Navbar from "./Navbar";

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

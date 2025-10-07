import { Outlet } from "react-router";
// TODO: import navbar

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

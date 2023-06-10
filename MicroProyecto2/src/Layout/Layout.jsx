import { Navabar } from "../components/Navbar/Navbar";
import { UserContextProvider } from "../contexts/UserContext";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <main>
      <UserContextProvider>
        <Navabar />
        <section className="body">
          <Outlet />
        </section>
      </UserContextProvider>
    </main>
  );
}

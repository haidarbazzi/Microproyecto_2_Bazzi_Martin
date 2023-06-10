import { Navbar } from "../components/Navbar/Navbar";
import { UserContextProvider } from "../contexts/UserContext";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";

export function Layout() {
  return (
    <main>
      <UserContextProvider>
        <Navbar />
        <section className={style.body}>
          <Outlet />
        </section>
      </UserContextProvider>
    </main>
  );
}

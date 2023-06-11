import { Navbar } from "../components/Navbar/Navbar";
import { UserContextProvider } from "../contexts/UserContext";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { FavoritesProvider } from "../contexts/FavoritesContext";

export function Layout() {
  return (
    <main>
      <UserContextProvider>
        <FavoritesProvider>
          <Navbar />
          <section className={style.body}>
            <Outlet />
          </section>
        </FavoritesProvider>
      </UserContextProvider>
    </main>
  );
}

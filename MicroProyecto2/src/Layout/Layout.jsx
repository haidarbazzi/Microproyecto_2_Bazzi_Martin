import { Navbar } from "../components/Navbar/Navbar";
import { UserContextProvider } from "../contexts/UserContext";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import { Footer } from "../components/Footer/Footer";

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
      <Footer />
    </main>
  );
}

import { Navbar } from "../components/Navbar/Navbar";
import { UserContextProvider } from "../contexts/UserContext";
import { Outlet } from "react-router-dom";
import style from "./Layout.module.css";
import { FavoriteContext } from "../contexts/FavoritesContext";

export function Layout() {
  return (
    <main>
      <UserContextProvider>
        <FavoriteContext.Provider>
          <Navbar />
          <section className={style.body}>
            <Outlet />
          </section>
        </FavoriteContext.Provider>
      </UserContextProvider>
    </main>
  );
}

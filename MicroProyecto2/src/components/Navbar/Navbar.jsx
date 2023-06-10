import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom/dist";
import { HOME_URL, LOGIN_URL } from "../../constants/urls";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.h}>
      {/* <button className={styles.abrir}>=</button> */}
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <li className={styles.listitem}>
            <Link to={LOGIN_URL} className={styles.link}>
              <span>Inicia Sesion/Registrate</span>
            </Link>
          </li>
          <li className={styles.listitem}>
            <Link to={HOME_URL} className={styles.link}>
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

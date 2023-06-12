import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom/dist";
import {
  ALL_RESERVATIONS_URL,
  FAVORITES_URL,
  HOME_URL,
  LOGIN_URL,
  PROFILE_URL,
} from "../../constants/urls";
import styles from "./Navbar.module.css";
import { UserContext, useUser } from "../../contexts/UserContext";
import { logout } from "../../firebase/auth";

export function Navbar() {
  const { user } = useUser();

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <header className={styles.h}>
      {/* <button className={styles.abrir}>=</button> */}
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <li className={styles.listitem}>
            <Link to={HOME_URL} className={styles.link}>
              <span>Home</span>
            </Link>
          </li>
          {!user && (
            <>
              <li className={styles.listitem}>
                <Link to={LOGIN_URL} className={styles.link}>
                  <span>Ingresar</span>
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li className={styles.listitem}>
                <Link to={PROFILE_URL} className={styles.link}>
                  <span>Perfil</span>
                </Link>
              </li>
            </>
          )}
          {user && (
            <>
              <li className={styles.listitem}>
                <Link to={FAVORITES_URL} className={styles.link}>
                  <span>Favoritos</span>
                </Link>
              </li>
            </>
          )}
          {user && user.email === "jose.jose@123.com" && (
            <>
            <li className={styles.listitem}>
              <Link to = {ALL_RESERVATIONS_URL} className={styles.link}>
                <span>Reservas</span>
              </Link>
            </li>
          </>
          )}
          {user && (
            <>
              <li className={styles.listitem}>
                <button type="button" onClick={handleLogout}>
                  Salir
                </button>
              </li>
            </>
          )}
          
        </ul>
      </nav>
    </header>
  );
}

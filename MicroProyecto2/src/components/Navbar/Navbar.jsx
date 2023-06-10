import { Link, useNavigate } from "react-router-dom/dist";

import styles from "./Navbar.module.css";
import { LOGIN_URL } from "../../constants/urls";

export function Navabar() {
  const navigate = useNavigate();
  //   const { user, isLoadingUser } = useUserContext();

  // const handleLogout = async () => {
  //   await logout(() => navigate(HOME_URL));
  // };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.menu}>
        <li className={`${styles.menuItem} ${styles.menuItemLeft}`}>
          <Link to={LOGIN_URL} className={styles.link}>
            <span>Inicia Sesion/Registrate</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={styles.nav_container}>
      <Link className={styles.logo}>noon</Link>

      <div className={styles.links_container}>
        <Link className={styles.links}>Pricing</Link>
        <Link className={styles.links}>Features</Link>
        <Link className={styles.links}>Open sources</Link>
        <Link className={styles.links}>Contact</Link>
      </div>
      <button className={styles.btn_sigIn}>Sign In</button>
    </nav>
  );
};

export default NavBar;

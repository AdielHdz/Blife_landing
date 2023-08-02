import { Link } from "react-router-dom";
import styles from "./NavBarPhone.module.css";
import { useState } from "react";
const NavBarPhone = () => {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const handlerOpenMenu = () => {
    setMenuIsActive(true);
  };

  const handlerCloseMenu = () => {
    setMenuIsActive(false);
  };
  return (
    <nav className={styles.navBar_container}>
      <Link className={styles.logo}>noon</Link>
      <button
        onClick={handlerOpenMenu}
        className={styles.burguerLines_container}
      >
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </button>
      <div
        className={styles.menu__container}
        style={{ display: menuIsActive ? "flex" : "none" }}
      >
        <button
          onClick={handlerCloseMenu}
          className={styles.closeButton__container}
        >
          <div className={`${styles.closeButton__lines} ${styles.line1}`}></div>
          <div className={`${styles.closeButton__lines} ${styles.line2}`}></div>
        </button>
        <Link className={styles.links}>Pricing</Link>
        <Link className={styles.links}>Features</Link>
        <Link className={styles.links}>Open sources</Link>
        <Link className={styles.links}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBarPhone;

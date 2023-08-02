import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import NavBarPhone from "./NavBarPhone";
const NavBar = () => {
  const [widthScreen, setWidthScreen] = useState({ width: window.innerWidth });

  useEffect(() => {
    const handleResize = () => {
      setWidthScreen({
        width: window.innerWidth,
      });
    };

    // Listener para el evento 'resize'
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [widthScreen]);
  return (
    <>
      {widthScreen.width > 700 ? (
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
      ) : (
        <NavBarPhone />
      )}
    </>
  );
};

export default NavBar;

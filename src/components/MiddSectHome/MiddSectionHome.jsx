import styles from "./MiddSectionHome.module.css";
import { IoIosArrowForward } from "react-icons/io";
const MiddSectionHome = () => {
  return (
    <section className={styles.bodySection_container}>
      <h2 className={styles.h2Title}>
        Make it <br></br>awesome.
      </h2>

      <p className={styles.bodySection__pSlogan}>
        AI trained to generate realistic 3D objects.
      </p>

      <button className={styles.bodySection__btnGetStarted}>
        Get started
        <IoIosArrowForward />
      </button>
    </section>
  );
};

export default MiddSectionHome;

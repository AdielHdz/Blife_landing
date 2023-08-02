import styles from "./Home.module.css";
import MiddSectionHome from "../MiddSectHome/MiddSectionHome";
import NavBar from "../NavBar/NavBar";
import DataSection from "./DataSection/DataSection";

const Home = () => {
  return (
    <section className={styles.main_container}>
      <div className={styles.bgWhite_container}>
        <NavBar />
        <MiddSectionHome />
        <DataSection />
      </div>
    </section>
  );
};

export default Home;

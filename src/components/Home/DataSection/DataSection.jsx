import TextPair from "../TextPair/TextPair";
import styles from "./DataSection.module.css";
import { LuStars } from "react-icons/lu";
import { LuCopyCheck } from "react-icons/lu";
import { GiTriangleTarget } from "react-icons/gi";
import { DiIntellij } from "react-icons/di";
import { BsInputCursorText } from "react-icons/bs";
const DataSection = () => {
  return (
    <div className={styles.dataSection__containerMain}>
      <section className={styles.dataSection__container}>
        <div className={styles.dataSection__header__container}>
          <div className={styles.dataSection__pSlogan_container}>
            <div className={styles.dataSection__icon_container}>
              <BsInputCursorText className={styles.dataSection__iconInput} />
            </div>

            <p className={styles.dataSection__pSlogan}>
              AI trained to generate realistic 3D objects
            </p>
          </div>
          <div className={styles.dataSection__iconStars_container}>
            <LuStars className={styles.dataSection__iconStars} />
          </div>
        </div>
        <div className={styles.dataSection__secondContainer}>
          <TextPair Icon={LuStars} h5="Style" p="Choose your styles" />
          <TextPair Icon={LuCopyCheck} h5="Material" p="Choose material" />
          <TextPair
            Icon={GiTriangleTarget}
            h5="Creativity"
            p="High-level"
            color={"blue"}
          />
          <TextPair
            Icon={DiIntellij}
            h5="AI model"
            p="Midjourney 5.0"
            color={"blue"}
          />
        </div>
      </section>
    </div>
  );
};

export default DataSection;

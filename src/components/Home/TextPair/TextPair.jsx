import styles from "./TextPair.module.css";
const TextPair = ({ Icon, h5, p, color }) => {
  return (
    <div className={styles.iconTextPair__container}>
      <div className={styles.icon_container}>
        {color ? (
          <Icon className={styles.iconBlue} />
        ) : (
          <Icon className={styles.icon} />
        )}
      </div>

      <div className={styles.textPair__container}>
        <h5 className={styles.textPair__h5}>{h5}</h5>
        <p className={styles.textPair__p}>{p}</p>
      </div>
    </div>
  );
};

export default TextPair;

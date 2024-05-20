import styles from "./CardDataLoader.module.css";
const CardDataLoader = () => {
  return (
    <>
      <div className={styles.skeletonLoader}>
        <div className={styles.header}>
          <div className={styles.title}></div>
        </div>
        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.flexText}></div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.flexText}></div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.flexText}></div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.flexText}></div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.flexText}></div>
            </div>
            <div className={styles.flexRow}>
              <div className={styles.circle}></div>
              <div className={styles.flexText}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDataLoader;

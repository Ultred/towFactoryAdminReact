import styles from "./CardData.module.css"; // Import your CSS styles

const CardData = () => {
  return (
    <div className={styles.cardDataContainer}>
      <div className={styles.cardDataContainerTop}>
        <h2>
          TRACKING NUMBER : <span>TF0123456789</span>
        </h2>
      </div>
      <div className={styles.cardDataContainerBody}>
        <div className={styles.cardDataContainerBodyLeft}>
          <p>
            STATUS: <span>On Checking</span>
          </p>
          <p>
            CLIENT: <span className={styles.boldText}>Juan Dela Cruz</span>
          </p>
          <p>
            MANUFACTURER: <span className={styles.boldText}>HONDA</span>
          </p>
          <p>
            PLATE NUMBER: <span className={styles.boldText}>ABC 124</span>
          </p>
        </div>
        <div className={styles.cardDataContainerBodyRight}>
          <div className={styles.flexDataContainer}>
            <img src="/src/assets/date.svg" alt="" />
            <div>
              <p>
                Date Placed: <span>March 13, 2024</span>
              </p>
              <p>
                Date Scheduled: <span>March 20, 2024</span>
              </p>
            </div>
          </div>
          <div className={styles.flexDataContainer}>
            <img src="/src/assets/pickUpblue.svg" alt="" />
            <p>839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila</p>
          </div>
          <div className={styles.flexDataContainer}>
            <img src="/src/assets/dropOffred.svg" alt="" />
            <p>Espana, Manila City, Metro Manila, Philippines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardData;

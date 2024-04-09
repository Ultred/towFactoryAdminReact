import styles from "./IconFloatLeft.module.css";
const IconFloatLeft = () => {
  return (
    <div className={styles.iconFloatLeft}>
      <div className={styles.circleStyle}>
        <img
          className={styles.icon}
          src="/src/assets/callIcon.svg"
          alt="call"
        />
      </div>
      <div className={styles.circleStyle}>
        <img
          className={styles.icon}
          src="/src/assets/messagesIcon.svg"
          alt="messages"
        />
      </div>
    </div>
  );
};

export default IconFloatLeft;

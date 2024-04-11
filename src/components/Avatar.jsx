import styles from "./Avatar.module.css";

const Avatar = ({ status }) => {
  let statusClass;
  switch (status) {
    case "Available":
      statusClass = styles.avatarAvailable;
      break;
    case "intransit":
      statusClass = styles.avatarIntransit;
      break;
    case "notAvailable":
      statusClass = styles.avatarNotAvailable;
      break;
    default:
      statusClass = styles.avatarOffline;
  }
  return (
    <div className={styles.avatarContainer}>
      <img
        className={styles.avatarPic}
        src="/src/assets/driverPic1.svg"
        alt="avatar"
      />
      <span className={`${styles.avatarStatus} ${statusClass}`}></span>
    </div>
  );
};

export default Avatar;

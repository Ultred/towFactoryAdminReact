import styles from "./Avatar.module.css";
import driverProfile from "../assets/driverPic1.svg";
const Avatar = ({ status }) => {
  let statusClass;
  switch (status) {
    case "Available":
      statusClass = styles.avatarAvailable;
      break;
    case "In-Transit":
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
      <img className={styles.avatarPic} src={driverProfile} alt="avatar" />
      <span className={`${styles.avatarStatus} ${statusClass}`}></span>
    </div>
  );
};

export default Avatar;

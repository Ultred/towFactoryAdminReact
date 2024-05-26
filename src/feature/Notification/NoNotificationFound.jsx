import styles from "./NoNotificationFound.module.css";
import NoDataFound from "../../assets/NoDataFoundPic.svg";

const NoNotificationFound = () => {
  return (
    <div className="p-5">
      <p className={styles.textP}>No New Notification Found</p>

      <img className={styles.img} src={NoDataFound} alt="" />
    </div>
  );
};

export default NoNotificationFound;

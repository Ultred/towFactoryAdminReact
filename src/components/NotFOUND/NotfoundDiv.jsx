import Notfound from "./NotFoundPic.svg";
import styles from "./Notfound.module.css";
const NotfoundDiv = () => {
  return (
    <div className={styles.contName}>
      <img src={Notfound} alt="No Data Found" />
    </div>
  );
};

export default NotfoundDiv;

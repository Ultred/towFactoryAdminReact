import styles from "./MessagesMain.module.css";
import { FaArrowLeft } from "react-icons/fa";
import driverPic from "../../assets/driverPic1.svg";
const MessagesMain = ({ onClose }) => {
  return (
    <div className={styles.MessagesMainOverlay}>
      <div className={styles.MessagesMainCont}>
        <div className={styles.MessagesMainContTop}>
          <button onClick={onClose}>
            <FaArrowLeft />
          </button>
          <h2 className={styles.MessagesMainContToph2}>Messages</h2>
        </div>
        <div className={styles.MessagesMainContBody}>
          <div className={styles.MessagesMainContBodyDiv}>
            <img src={driverPic} alt="profilePic" />
            <div className={styles.flexText}>
              <h2>Juan Dela Cruz</h2>
              <p>Hello Thanks for assistance!</p>
            </div>
          </div>
          <div>
            <p>10:41am</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesMain;

import { FaXmark } from "react-icons/fa6";
import styles from "./DriverInfoModal.module.css";
import Avatar from "../../components/Avatar";
import { ModalStoreState } from "../../context/ModalStoreState";
import callIcon from "../../assets/callIcon.svg";
import trackIcon from "../../assets/trackIcon.svg";
const DriverInfoModal = () => {
  const { closeModal } = ModalStoreState();
  const handleCloseModalX = () => {
    closeModal();
  };
  return (
    <div className={styles.DriverInfoContainer}>
      <div className={styles.bookingInfoTop}>
        <h2 className={styles.bookingInfoToph2}>Booking Information</h2>
        <FaXmark className="cursor-pointer" onClick={handleCloseModalX} />
      </div>
      <div className={styles.bookingInfoBody1}>
        <div className={styles.flex}>
          <Avatar status={"Available"} />

          <div className={styles.flexInputContainer}>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Driver:</h2>
              <select
                className={`${styles.fontMainbold} ${styles.selectBg}`}
                name=""
                id=""
              >
                <option value="option1">John Batumbakal</option>
                <option value="option2">Jon Bones</option>
                <option value="option3">Moniko ni monika</option>
              </select>
            </div>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Phone:</h2>
              <p className={styles.fontMainbold}>
                <span>+63</span>9615698142
              </p>
            </div>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Plate Number:</h2>
              <select
                className={`${styles.fontMainbold} ${styles.selectBg}`}
                name=""
                id=""
              >
                <option value="option1">ABC 143</option>
                <option value="option2">XYZ 999</option>
                <option value="option3">Sample 577</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.flexButtonsContainer}>
          <button className={styles.bookingInfobutton}>
            <img src={callIcon} alt="call" />
          </button>
          <button className={styles.bookingInfobutton}>
            <img src={trackIcon} alt="track" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DriverInfoModal;

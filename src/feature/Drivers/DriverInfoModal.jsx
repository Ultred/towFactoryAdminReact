import { FaXmark } from "react-icons/fa6";
import styles from "./DriverInfoModal.module.css";
import pickUpBlueIcon from "../../assets/pickUpblue.svg";
import dropOffRedIcon from "../../assets/dropOffred.svg";
import dateIcon from "../../assets/date.svg";
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
      <div className={styles.bookingInfoBody2}>
        <h2 className={styles.fontCenter}>Activity Today</h2>
        <div className={styles.cardDataContainer}>
          <div className={`${styles.cardDataContainerTop}`}>
            <h2>
              TRACKING NUMBER: <span>TF9876543210</span>
            </h2>
            <p>CLIENT: CLIENT 1</p>
          </div>
          <div className={styles.cardDataContainerBody}>
            <p>
              STATUS:
              <span className={`${styles.boldText} `}>In Transit</span>
            </p>
            <p>
              CLIENT: <span className={styles.boldText}>Juan Dela Cruz</span>
            </p>
            <div className={styles.flexDataContainer}>
              <img src={dateIcon} alt="" />
              <div>
                <p>
                  Date Placed: <span> March 15, 2024</span>
                </p>
                <p>
                  Date Scheduled: <span>March 22, 2024</span>
                </p>
              </div>
            </div>
            <div className={styles.flexDataContainer}>
              <img src={pickUpBlueIcon} alt="pickup" />
              <p>123 Main St, Quezon City, Metro Manila</p>
            </div>
            <div className={styles.flexDataContainer}>
              <img src={dropOffRedIcon} alt="dropoff" />
              <p>Ortigas Center, Pasig City, Metro Manila, Philippines</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.flexDataContBottom}>
        <h2 className={styles.fontCenterBottom}>Attendance</h2>
        <div className={styles.flexBottom}>
          <p>
            Time In: <span> 7:58 AM</span>
          </p>
          <p>
            Time Out: <span>9:00 PM</span>
          </p>
          <span className="cursor-pointer">Customize</span>
        </div>
      </div>
    </div>
  );
};

export default DriverInfoModal;

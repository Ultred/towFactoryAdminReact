import { FaXmark } from "react-icons/fa6";
import styles from "./BookingInfoModal.module.css";

const BookingInfoModal = () => {
  return (
    <div className={styles.bookingInfocontainer}>
      <div className={styles.bookingInfoTop}>
        <h2 className={styles.bookingInfoToph2}>Booking Information</h2>
        <FaXmark />
      </div>
      <div className={styles.bookingInfoBody1}>
        <div className={styles.flex}>
          <img
            className={styles.driverCirclePic}
            src="/src/assets/driverCircle.svg"
            alt="driver"
          />

          <div className={styles.flexInputContainer}>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Driver:</h2>
              <select name="" id="">
                <option value="option1">John Batumbakal</option>
                <option value="option2">Jon Bones</option>
                <option value="option3">Moniko ni monika</option>
              </select>
            </div>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Phone:</h2>
              <p>
                <span>+63</span>9615698142
              </p>
            </div>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Plate Number:</h2>
              <p>ABC 123</p>
            </div>
          </div>
        </div>
        <div className={styles.flexButtonsContainer}>
          <button className={styles.bookingInfobutton}>
            <img src="/src/assets/callIcon.svg" alt="call" />
          </button>
          <button className={styles.bookingInfobutton}>
            <img src="/src/assets/trackIcon.svg" alt="track" />
          </button>
        </div>
      </div>
      <div className={styles.bookingInfoBody2}>
        <p className={styles.bookingInfoBodyP}>
          STATUS: <b>-</b>
        </p>
        <p className={styles.bookingInfoBodyP}>
          CLIENT: <b>Juan Dela Cruz</b>
        </p>
        <p className={styles.bookingInfoBodyP}>
          PHONE: <span>+63</span> <b>9615698142</b>{" "}
        </p>
      </div>
      <div className={styles.bookingInfoBody3}>
        <div className={styles.bookingInfoBody3Flex}>
          <img src="/src/assets/pickUpblue.svg" alt="pickup" />
          <p> 839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila </p>
        </div>
        <div className={styles.bookingInfoBody3Flex}>
          <img src="/src/assets/dropOffred.svg" alt="dropOff" />
          <p> Espana, Manila City, Metro Manila, Philippines </p>
        </div>
      </div>
      <div>
        <h2>Driver's Request</h2>
      </div>
    </div>
  );
};

export default BookingInfoModal;

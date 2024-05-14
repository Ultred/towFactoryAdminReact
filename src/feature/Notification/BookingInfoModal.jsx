import { FaXmark } from "react-icons/fa6";
import styles from "./BookingInfoModal.module.css";
import { FaCheck } from "react-icons/fa";
import driverCircle from "../../assets/driverCircle.svg";
import callIcon from "../../assets/callIcon.svg";
import trackIcon from "../../assets/trackIcon.svg";
import pickupBlue from "../../assets/pickUpblue.svg";
import dropOffRed from "../../assets/dropOffred.svg";
import { ModalStoreState } from "../../context/ModalStoreState";
import AssignDriverModal from "./AssignDriverModal";
const BookingInfoModal = () => {
  const { openModal } = ModalStoreState();
  const handleBackModal = () => {
    openModal(<AssignDriverModal />);
  };
  const handleNextModal = () => {
    console.log("test");
  };
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
            src={driverCircle}
            alt="driver"
          />

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
              <p className={styles.fontMainbold}>ABC 123</p>
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
      <div className={styles.slider}>
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
            <img src={pickupBlue} alt="pickup" />
            <p>
              {" "}
              839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila{" "}
            </p>
          </div>
          <div className={styles.bookingInfoBody3Flex}>
            <img src={dropOffRed} alt="dropOff" />
            <p> Espana, Manila City, Metro Manila, Philippines </p>
          </div>
        </div>
        <div className={styles.bookingInfoBody4}>
          <h2 className={styles.textBlue}>Driver's Request</h2>
          <ul className={styles.styleUlList}>
            <li className={styles.styleLiList}>
              <div className={styles.styleDivList}>
                <p>Rollers</p> <span>1PC</span>
              </div>
              <span className={styles.fontBold}>P 1500</span>
            </li>
            <li className={styles.styleLiList}>
              <div className={styles.styleDivList}>
                <p>RollersPcccc</p> <span>1PC</span>
              </div>
              <span className={styles.fontBold}>P 1500</span>
            </li>
          </ul>
          <div className={styles.noteContainer}>
            <p>
              <span>NOTE:</span>
              Can’t start the vehicle, can neutral, the handbreak is okay.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bookingInfobottom}>
        <div className={styles.timeContainer}>
          <div className={styles.bottomFlex}>
            <h4 className={styles.fontLight3}>Arrival Time:</h4>
            <p className={styles.textLight2}>10:15 AM</p>
          </div>
          <div className={styles.bottomFlex}>
            <h4 className={styles.fontLight3}>Delivery Time:</h4>
            <p className={styles.textLight2}>12:02 PM</p>
          </div>
        </div>
        <div className={styles.amountContainer}>
          <div className={styles.bottomFlex}>
            <h3 className={styles.fontLight3}>Total Amount:</h3>
            <span>P1500</span>
          </div>
          <div className={styles.bottomFlex}>
            <button
              onClick={handleBackModal}
              className={`${styles.buttonCircle} ${styles.buttonCircleCross}`}
            >
              <FaXmark />
            </button>
            <button
              onClick={handleNextModal}
              className={`${styles.buttonCircle} ${styles.buttonCircleCheck}`}
            >
              <FaCheck />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoModal;

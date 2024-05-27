import { FaArrowLeft } from "react-icons/fa6";
import driverCircle from "../../assets/driverCircle.svg";
import trackIcon from "../../assets/trackIcon.svg";
import pickupBlue from "../../assets/pickUpblue.svg";
import dropOffRed from "../../assets/dropOffred.svg";
import styles from "./OutletDriverInfo.module.css";
const OutletDriverInfo = () => {
  const handleNavigateBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.container}>
      <div onClick={handleNavigateBack} className={styles.flexTopBack}>
        <FaArrowLeft /> Track The Driver
      </div>
      <div className={styles.bookingInfocontainer}>
        <div className={styles.bookingInfoTop}>
          <h2 className={styles.bookingInfoToph2}>Booking Information</h2>
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
                <p className={styles.fontMainbold}></p>
                {/* <select
                className={`${styles.fontMainbold} ${styles.selectBg}`}
                name=""
                id=""
              >
                <option value="option1">John Batumbakal</option>
                <option value="option2">Jon Bones</option>
                <option value="option3">Moniko ni monika</option>
              </select> */}
              </div>
              <div className={styles.flexInput}>
                <h2 className={styles.fontLight}>Phone:</h2>
                <p className={styles.fontMainbold}></p>
              </div>
              <div className={styles.flexInput}>
                <h2 className={styles.fontLight}>Plate Number:</h2>
                <p className={styles.fontMainbold}></p>
              </div>
            </div>
          </div>
          <div className={styles.flexButtonsContainer}>
            <button className={styles.bookingInfobutton}>
              <img src={trackIcon} alt="track" />
            </button>
          </div>
        </div>
        <div className={styles.slider}>
          <div className={styles.bookingInfoBody2}>
            <p className={styles.bookingInfoBodyP}>
              STATUS: <b></b>
            </p>
            <p className={styles.bookingInfoBodyP}>
              CLIENT: <b></b>
            </p>
            <p className={styles.bookingInfoBodyP}>PHONE:</p>
          </div>
          <div className={styles.bookingInfoBody3}>
            <div className={styles.bookingInfoBody3Flex}>
              <img src={pickupBlue} alt="pickup" />
              <p></p>
            </div>
            <div className={styles.bookingInfoBody3Flex}>
              <img src={dropOffRed} alt="dropOff" />
              <p> </p>
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
            </ul>

            <div className={styles.noteContainer}>
              <p>
                <span>NOTE:</span>
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
              <span>P</span>
            </div>
            <div className={styles.bottomFlex}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutletDriverInfo;

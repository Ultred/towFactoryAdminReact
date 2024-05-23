import { FaXmark } from "react-icons/fa6";
import styles from "./BookingInfoModal.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import driverCircle from "../../assets/driverCircle.svg";
import callIcon from "../../assets/callIcon.svg";
import trackIcon from "../../assets/trackIcon.svg";
import pickupBlue from "../../assets/pickUpblue.svg";
import dropOffRed from "../../assets/dropOffred.svg";
import { ModalStoreState } from "../../context/ModalStoreState";
import AssignDriverModal from "./AssignDriverModal";
import { SaveNotifBookingSolo } from "../../context/SaveNotifBookingState";
import * as apiClient from "../../service/ApiClient";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
const BookingInfoModal = () => {
  const { openModal, closeModal } = ModalStoreState();
  const { soloBookNotifValue } = SaveNotifBookingSolo();
  const { mutate, isPending } = useMutation({
    mutationKey: ["acceptance", soloBookNotifValue.id],
    mutationFn: apiClient.putAssignDriverNotif,
    onSuccess: (response) => {
      toast.success("Booking In-transit");
    },
    onError: (error) => {
      console.log(error.message);
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleBackModal = () => {
    openModal(<AssignDriverModal />);
  };
  const handleNextDone = () => {
    const { driverData } = soloBookNotifValue;
    const driverId = driverData.id;
    console.log(driverId);
    const formData = new FormData();

    formData.append(
      "data",
      JSON.stringify({
        driverId,
      })
    );
    mutate(formData);
    console.log(soloBookNotifValue);
  };

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className={styles.bookingInfocontainer}>
      <div className={styles.bookingInfoTop}>
        <h2 className={styles.bookingInfoToph2}>
          <IoMdArrowRoundBack
            className="cursor-pointer"
            onClick={handleBackModal}
          />
          Booking Information
        </h2>
        <FaXmark onClick={handleCloseModal} />
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
              <p className={styles.fontMainbold}>
                {`${soloBookNotifValue.driverData.firstName}  ${soloBookNotifValue.driverData.lastName}`}
              </p>
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
              <p className={styles.fontMainbold}>
                {soloBookNotifValue.driverData.phoneNumber}
              </p>
            </div>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Plate Number:</h2>
              <p className={styles.fontMainbold}>
                {soloBookNotifValue.driverData.plateNumber}
              </p>
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
            STATUS: <b>{soloBookNotifValue.status}</b>
          </p>
          <p className={styles.bookingInfoBodyP}>
            CLIENT:{" "}
            <b>
              {`${soloBookNotifValue.user.firstName}  ${soloBookNotifValue.user.lastName}`}
            </b>
          </p>
          <p className={styles.bookingInfoBodyP}>
            PHONE: {soloBookNotifValue.phone}
          </p>
        </div>
        <div className={styles.bookingInfoBody3}>
          <div className={styles.bookingInfoBody3Flex}>
            <img src={pickupBlue} alt="pickup" />
            <p> {soloBookNotifValue.pickUpAddress} </p>
          </div>
          <div className={styles.bookingInfoBody3Flex}>
            <img src={dropOffRed} alt="dropOff" />
            <p> {soloBookNotifValue.dropOffAddress} </p>
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
              {"  "}
              {soloBookNotifValue.note}
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
            <span>P{soloBookNotifValue.totalAmount}</span>
          </div>
          <div className={styles.bottomFlex}>
            <button
              onClick={handleBackModal}
              className={`${styles.buttonCircle} ${styles.buttonCircleCross}`}
            >
              <FaXmark />
            </button>
            <button
              onClick={handleNextDone}
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

import { FaXmark } from "react-icons/fa6";
import styles from "./BookingInfoSoloModal.module.css";
import { FaCheck } from "react-icons/fa";
import driverCircle from "../assets/driverCircle.svg";
import { IoMdLocate } from "react-icons/io";
import callIcon from "../assets/callIcon.svg";
import trackIcon from "../assets/trackIcon.svg";
import pickupBlue from "../assets/pickUpblue.svg";
import dropOffRed from "../assets/dropOffred.svg";
import * as apiClient from "../service/ApiClient";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ModalStoreState } from "../context/ModalStoreState";
import { useNavigate, useParams } from "react-router-dom";
import LoaderCustom from "../feature/loaders/LoaderCustom";
const BookingInfoSoloModal = () => {
  const { openModal, closeModal } = ModalStoreState();
  const navigate = useNavigate();
  const { bookingID } = useParams();
  const {
    data: bookingSoloId,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["bookingSoloView", bookingID],
    queryFn: apiClient.getSoloBookingById,
    refetchOnWindowFocus: false,
  });
  const handleCloseModal = () => {
    closeModal();
  };
  let statusColorClass = "";
  switch (bookingSoloId?.booking?.status?.toUpperCase()) {
    case "IN TRANSIT":
      statusColorClass = styles.inTransit;
      break;
    case "CANCELLED":
      statusColorClass = styles.cancelled;
      break;
    case "DELIVERED":
      statusColorClass = styles.delivered;
      break;
    case "RECEIVED":
      statusColorClass = styles.recieved;
      break;
    default:
      statusColorClass = "";
  }

  const handleTrackDriver = () => {
    navigate("/trackBooking");
    closeModal();
  };

  if (isError) {
    return <p>Error</p>;
  }
  if (isLoading) {
    return <LoaderCustom />;
  }

  return (
    <div className={styles.bookingInfocontainer}>
      <div className={`${styles.bookingInfoTop} ${statusColorClass}`}>
        <h2 className={styles.bookingInfoToph2}>Booking Information</h2>
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
                {bookingSoloId?.booking?.driver === null ? (
                  <p>N/A</p>
                ) : (
                  bookingSoloId?.booking?.driver?.firstName +
                  " " +
                  bookingSoloId?.booking?.driver?.lastName
                )}
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
                {bookingSoloId?.booking?.driver === null ? (
                  <p>N/A</p>
                ) : (
                  bookingSoloId?.booking?.driver?.phoneNumber
                )}
              </p>
            </div>
            <div className={styles.flexInput}>
              <h2 className={styles.fontLight}>Plate Number:</h2>
              <p className={styles.fontMainbold}>
                {bookingSoloId?.booking?.driver === null ? (
                  <p>N/A</p>
                ) : (
                  bookingSoloId?.booking?.driver?.plateNumber
                )}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.flexButtonsContainer}>
          {bookingSoloId?.booking?.status?.toUpperCase() === "IN TRANSIT" && (
            <button
              onClick={handleTrackDriver}
              className={styles.bookingInfobutton}
            >
              <img src={trackIcon} alt="track" />
            </button>
          )}
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.bookingInfoBody2}>
          <p className={styles.bookingInfoBodyP}>
            STATUS: <b>{bookingSoloId.booking?.status} </b>
          </p>
          <p className={styles.bookingInfoBodyP}>
            CLIENT:{" "}
            <b>
              {" "}
              {bookingSoloId.booking?.user?.firstName}{" "}
              {bookingSoloId.booking?.user?.lastName}
            </b>
          </p>
          <p className={styles.bookingInfoBodyP}>
            PHONE:
            <b>{bookingSoloId.booking?.user?.phoneNumber}</b>
          </p>
        </div>
        <div className={styles.bookingInfoBody3}>
          <div className={styles.bookingInfoBody3Flex}>
            <img src={pickupBlue} alt="pickup" />

            <p> {bookingSoloId.booking?.pickUpAddress} </p>
          </div>
          <div className={styles.bookingInfoBody3Flex}>
            <img src={dropOffRed} alt="dropOff" />

            <p> {bookingSoloId.booking?.dropOffAddress} </p>
          </div>
        </div>
        <div className={styles.bookingInfoBody4}>
          <h2 className={styles.textBlue}>Driver's Request</h2>
          <ul className={styles.styleUlList}>
            {bookingSoloId.booking?.driversAddOns === null ? (
              <p className="text-center">No Add-ons</p>
            ) : (
              <li className={styles.styleLiList}>
                <div className={styles.styleDivList}>
                  <p>Rollers</p> <span>1PC</span>
                </div>
                <span className={styles.fontBold}>P 1500</span>
              </li>
            )}
          </ul>
          <div className={styles.noteContainer}>
            <p>
              <span>NOTE:</span>
              {"  "} {bookingSoloId.booking?.note}
            </p>
          </div>
        </div>
      </div>

      <div className={`${styles.bookingInfobottom} ${statusColorClass}`}>
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
            <span>P {bookingSoloId.booking?.totalAmount}</span>
          </div>
          <div className={styles.bottomFlex}>
            {bookingSoloId?.booking?.status?.toUpperCase() === "IN TRANSIT" && (
              <button
                onClick={handleTrackDriver}
                className={`${styles.buttonCircle} ${styles.buttonCircleCheck}`}
              >
                <IoMdLocate /> Track
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInfoSoloModal;

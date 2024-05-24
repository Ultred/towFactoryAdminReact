import styles from "./CardDatas.module.css";
import dropOffRedIcon from "../assets/dropOffred.svg";
import pickUpBlueIcon from "../assets/pickUpblue.svg";
import dateIcon from "../assets/date.svg";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ModalStoreState } from "../context/ModalStoreState";
import BookingInfoSoloModal from "./BookingInfoSoloModal";
const CardDatas = ({
  data: {
    id,
    status,
    trackingNo,
    user,
    manufacturer,
    plateNum,
    scheduledDate,
    pickUpAddress,
    dropOffAddress,
  },
}) => {
  let statusColorClass = "";
  let statusColorP = "";
  const { openModal } = ModalStoreState();
  const navigate = useNavigate();
  // Determine color based on status
  if (status && typeof status === "string") {
    // Determine color based on status
    switch (status.toUpperCase()) {
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

    switch (status.toUpperCase()) {
      case "IN TRANSIT":
        statusColorP = styles.inTransitP;
        break;
      case "CANCELLED":
        statusColorP = styles.cancelledP;
        break;
      case "DELIVERED":
        statusColorP = styles.deliveredP;
        break;
      default:
        statusColorP = "";
    }
  }

  const handleViewDetailsBookSolo = () => {
    navigate(`/trips/${id}`);
    openModal(<BookingInfoSoloModal />);
  };

  return (
    <div className={styles.cardDataContainer}>
      <div
        onClick={handleViewDetailsBookSolo}
        className={`${styles.cardDataContainerTop} ${statusColorClass}`}
      >
        <h2>
          TRACKING NUMBER: <span>{trackingNo}</span>
        </h2>
        <p>CLIENT: CLIENT 1</p>
      </div>
      <div className={styles.cardDataContainerBody}>
        <div className={styles.cardDataContainerBodyLeft}>
          <p>
            STATUS:
            <span className={`${styles.boldText} ${statusColorP}`}>
              {status}
            </span>
          </p>
          <p>
            CLIENT:{" "}
            <span className={styles.boldText}>
              {user?.firstName} {user?.lastName}
            </span>
          </p>
          <p>
            MANUFACTURER:
            <span className={styles.boldText}>{manufacturer}</span>
          </p>
          <p>
            PLATE NUMBER: <span className={styles.boldText}>{plateNum}</span>
          </p>
        </div>
        <div className={styles.cardDataContainerBodyRight}>
          <div className={styles.flexDataContainer}>
            <img src={dateIcon} alt="" />
            <div>
              <p>
                Date Placed: <span>March 13, 2024</span>
              </p>
              <p>
                Date Scheduled: <span>{scheduledDate}</span>
              </p>
            </div>
          </div>
          <div className={styles.flexDataContainer}>
            <img src={pickUpBlueIcon} alt="pickup" />
            <p>{pickUpAddress}</p>
          </div>
          <div className={styles.flexDataContainer}>
            <img src={dropOffRedIcon} alt="dropoff" />
            <p>{dropOffAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardDatas.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.string.isRequired,
    trackingNo: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired, // Changed to object
    manufacturer: PropTypes.string.isRequired,
    plateNum: PropTypes.string.isRequired,
    scheduledDate: PropTypes.string.isRequired,
    pickUpAddress: PropTypes.string.isRequired,
    dropOffAddress: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardDatas;

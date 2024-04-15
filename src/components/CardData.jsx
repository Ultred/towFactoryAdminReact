import styles from "./CardData.module.css";
import PropTypes from "prop-types";
const CardData = ({
  data: {
    trackingNumber,
    status,
    client,
    manufacturer,
    plateNumber,
    datePlaced,
    dateScheduled,
    pickUpLocation,
    dropOffLocation,
  },
}) => {
  let statusColorClass = "";

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
    default:
      statusColorClass = "";
  }
  return (
    <div className={styles.cardDataContainer}>
      <div className={`${styles.cardDataContainerTop} ${statusColorClass}`}>
        <h2>
          TRACKING NUMBER: <span>{trackingNumber}</span>
        </h2>
      </div>
      <div className={styles.cardDataContainerBody}>
        <div className={styles.cardDataContainerBodyLeft}>
          <p>
            STATUS: <span>{status}</span>
          </p>
          <p>
            CLIENT: <span className={styles.boldText}>{client}</span>
          </p>
          <p>
            MANUFACTURER:{" "}
            <span className={styles.boldText}>{manufacturer}</span>
          </p>
          <p>
            PLATE NUMBER: <span className={styles.boldText}>{plateNumber}</span>
          </p>
        </div>
        <div className={styles.cardDataContainerBodyRight}>
          <div className={styles.flexDataContainer}>
            <img src="/src/assets/date.svg" alt="" />
            <div>
              <p>
                Date Placed: <span>{datePlaced}</span>
              </p>
              <p>
                Date Scheduled: <span>{dateScheduled}</span>
              </p>
            </div>
          </div>
          <div className={styles.flexDataContainer}>
            <img src="/src/assets/pickUpblue.svg" alt="" />
            <p>{pickUpLocation}</p>
          </div>
          <div className={styles.flexDataContainer}>
            <img src="/src/assets/dropOffred.svg" alt="" />
            <p>{dropOffLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

//PropTypes
CardData.propTypes = {
  data: PropTypes.shape({
    trackingNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    plateNumber: PropTypes.string.isRequired,
    datePlaced: PropTypes.string.isRequired,
    dateScheduled: PropTypes.string.isRequired,
    pickUpLocation: PropTypes.string.isRequired,
    dropOffLocation: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardData;

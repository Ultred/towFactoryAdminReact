import { ModalStoreState } from "../../context/ModalStoreState";
import AssignDriverModal from "./AssignDriverModal";
import Button from "../../components/Button";
import styles from "./NotificationModal.module.css";
import dropOffRed from "../../assets/dropOffred.svg";
import pickupBlue from "../../assets/pickUpblue.svg";
import RejectionNotifModal from "./RejectionNotifModal";
const NoficationModal = () => {
  const { openModal } = ModalStoreState();

  const handleShowRejectModal = () => {
    openModal(<RejectionNotifModal />);
  };

  const handleShowAssignDriverModal = () => {
    openModal(<AssignDriverModal />);
  };
  return (
    <div className={styles.notificationModalContainer}>
      <div className={styles.notificationModalTop}>
        <h2 className={styles.notificationModalh2}>Booking</h2>
        <p className={styles.notificationModalviewDetails}>View all Details</p>
      </div>
      <div className={styles.notificationModalData}>
        <p>
          CLIENT: <span className={styles.boldtext}>Juan Dela Cruz</span>
        </p>
        <p>
          PHONE: <span className={styles.boldtext}>09123456789</span>
        </p>
      </div>
      <div className={styles.notificationModalLocation}>
        <div className={styles.flexNotif}>
          <img src={pickupBlue} alt="pickup" />
          <p>839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila</p>
        </div>
        <div className={styles.flexNotif}>
          <img src={dropOffRed} alt="dropoff" />
          <p>Espana, Manila City, Metro Manila, Philippines</p>
        </div>
      </div>
      <div className={styles.flexTotal}>
        <h2 className={styles.fontBoldh}>Total Amount:</h2>
        <p className={styles.fontBlueP}>P10000</p>
      </div>
      <div className={styles.notificationModalButtons}>
        <Button onClick={handleShowRejectModal} buttonStyle={"secondary"}>
          Reject
        </Button>
        <Button onClick={handleShowAssignDriverModal} buttonStyle={"primary"}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default NoficationModal;

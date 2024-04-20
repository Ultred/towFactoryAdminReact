import { ModalStoreState } from "../../context/ModalStoreState";
import Button from "../../components/Button";
import styles from "./RejectionNotifModal.module.css";
const RejectionNotifModal = () => {
  const { closeModal } = ModalStoreState();
  const handleAcceptReject = () => {
    closeModal();
  };
  return (
    <div className={styles.rejectionNotificationModalContainer}>
      <div className={styles.rejectionNotificationModalTop}>
        <h2 className={styles.rejectionNotificationModalh2}>Rejection</h2>
      </div>
      <div className={styles.rejectionNotifModalBody}>
        <p className={styles.rejectionNotificationModalp}>
          Reason behind rejection:
        </p>
        <textarea
          name=""
          className={styles.rejectionNotificationModalTextArea}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className={styles.rejectionNotifModalButtons}>
          <Button onClick={closeModal} buttonStyle={"secondary"}>
            Reject
          </Button>
          <Button onClick={handleAcceptReject} buttonStyle={"primary"}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RejectionNotifModal;

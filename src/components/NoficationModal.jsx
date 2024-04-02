import styles from "./NotificationModal.module.css";
const NoficationModal = () => {
  return (
    <div className={styles.notificationModalContainer}>
      <div className={styles.notificationModalTop}>
        <h2>Booking</h2>
        <p>View all Details</p>
      </div>
      <div className={styles.notificationModalData}>
        <p>
          STATUS: <span>On Cheking</span>
        </p>
        <p>
          CLIENT: <span>Juan Dela Cruz</span>
        </p>
        <p>
          PHONE: <span>09123456789</span>
        </p>
      </div>
      <div className={styles.notificationModalLocation}>
        <div className={styles.flexNotif}>
          <img src="/src/assets/pickUpblue.svg" alt="" />
          <p>839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila</p>
        </div>
        <div className={styles.flexNotif}>
          <img src="/src/assets/dropOffred.svg" alt="" />
          <p>Espana, Manila City, Metro Manila, Philippines</p>
        </div>
      </div>
    </div>
  );
};

export default NoficationModal;

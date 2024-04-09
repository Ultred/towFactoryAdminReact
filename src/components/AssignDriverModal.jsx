import styles from "./AssignDriverModal.module.css";
import { FaXmark } from "react-icons/fa6";
const AssignDriverModal = () => {
  return (
    <div className={styles.assignDriverModalContainer}>
      <div className={styles.assignDriverModalTop}>
        <h2 className={styles.assignDriverModalh2}>Assign Driver</h2>
        <FaXmark />
      </div>
      <div className={styles.assignDriverModalBody}>
        <div>
          <h2>Drivers Name</h2>
        </div>
      </div>
    </div>
  );
};

export default AssignDriverModal;

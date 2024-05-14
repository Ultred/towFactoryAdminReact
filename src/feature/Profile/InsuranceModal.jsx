import { FaXmark } from "react-icons/fa6";
import styles from "./InsuranceModal.module.css";
import { HiPlusSm } from "react-icons/hi";
import { ModalStoreState } from "../../context/ModalStoreState";
const InsuranceModal = () => {
  const { closeModal } = ModalStoreState();
  const handleCloseModalX = () => {
    closeModal();
  };
  return (
    <div className={styles.InsuranceInfoContainer}>
      <div className={styles.InsuranceInfoTop}>
        <h2 className={styles.InsuranceInfoToph2}>Insurance List</h2>
        <FaXmark className="cursor-pointer" onClick={handleCloseModalX} />
      </div>
      <div className={styles.InsuranceInfoBody}>
        <div className={styles.InsuranceInfo}></div>
      </div>
      <div className={styles.InsuranceInfoBottom}>
        <p className={styles.pFont}>
          <HiPlusSm /> Add Insurance
        </p>
      </div>
    </div>
  );
};

export default InsuranceModal;

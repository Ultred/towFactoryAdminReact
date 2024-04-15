import { ModalStoreState } from "../context/ModalStoreState";
import styles from "./ModalMain.module.css";

const ModalMain = ({ children }) => {
  const { closeModal } = ModalStoreState();
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <div onClick={handleOverlayClick} className={styles.modal_overlay}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export default ModalMain;

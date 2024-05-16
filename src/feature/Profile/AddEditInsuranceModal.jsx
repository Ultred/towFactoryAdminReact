import { BsFillPencilFill } from "react-icons/bs";
import styles from "./AddEditInsuranceModal.module.css";
import { HiPlusSm } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";
import { ModalStoreState } from "../../context/ModalStoreState";
import Button from "../../components/Button";

const AddEditInsuranceModal = () => {
  const { closeModal } = ModalStoreState();
  const handleDeleteInsurance = () => {};
  const handleCloseModalX = () => {
    closeModal();
  };
  const handleAddInsurance = () => {
    closeModal();
  };
  const handleCancelInsurance = () => {
    console.log("test");
  };
  const handleSaveInsurance = () => {
    console.log("test");
  };
  return (
    <div className={styles.InsuranceInfoContainer}>
      <div className={styles.InsuranceInfoTop}>
        <h2 className={styles.InsuranceInfoToph2}>Insurance List</h2>
        <FaXmark className="cursor-pointer" onClick={handleCloseModalX} />
      </div>
      <div className={styles.InsuranceInfoBody}>
        <div></div>
      </div>
      <div onClick={handleAddInsurance} className={styles.InsuranceInfoBottom}>
        <div className={styles.InsuranceInfoBottomDiv}>
          <Button
            buttonStyle={"buttonCustom2"}
            type={"submit"}
            icon={"delete"}
            onClick={handleDeleteInsurance}
          >
            Delete
          </Button>
          <div className={styles.InsuranceInfoBottomDivFlex}>
            <Button
              buttonStyle={"quaternary"}
              type={"submit"}
              icon={"cross"}
              onClick={handleCancelInsurance}
            >
              Cancel
            </Button>
            <Button
              buttonStyle={"secondary"}
              type={"submit"}
              icon={"check"}
              onClick={handleSaveInsurance}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditInsuranceModal;

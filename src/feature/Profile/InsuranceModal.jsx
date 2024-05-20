import { FaXmark } from "react-icons/fa6";
import insurancePic from "../../assets/insurance1Sample.png";
import styles from "./InsuranceModal.module.css";
import { BsFillPencilFill } from "react-icons/bs";
import { HiPlusSm } from "react-icons/hi";
import { ModalStoreState } from "../../context/ModalStoreState";
import AddEditInsuranceModal from "./AddEditInsuranceModal";
import * as apiClient from "../../service/ApiClient";
import { useQuery } from "@tanstack/react-query";
const InsuranceModal = () => {
  const { openModal, closeModal } = ModalStoreState();
  const { data: insuranceData, isLoading } = useQuery({
    queryKey: ["insuranceData"],
    queryFn: apiClient.getAllInsurances,
  });
  const handleCloseModalX = () => {
    closeModal();
  };
  const handleAddInsurance = () => {
    openModal(<AddEditInsuranceModal />);
  };
  return (
    <div className={styles.InsuranceInfoContainer}>
      <div className={styles.InsuranceInfoTop}>
        <h2 className={styles.InsuranceInfoToph2}>Insurance List</h2>
        <FaXmark className="cursor-pointer" onClick={handleCloseModalX} />
      </div>
      <div className={styles.InsuranceInfoBody}>
        <div className={styles.slider}>
          <ul className={styles.InsuranceInfo}>
            {isLoading
              ? "Loading..."
              : insuranceData?.result?.map((insurance) => (
                  <>
                    <li key={insurance.id} className={styles.InsuranceInfoDiv}>
                      <div className={styles.InsuranceInfoImg}>
                        <img
                          className={styles.imgPic}
                          src={insurancePic}
                          alt="picSample"
                        />
                        <div className={styles.InsuranceInfoText}>
                          <h2 className={styles.h2Font}>{insurance.name}</h2>
                          <p className={styles.pFont}>{insurance.price}</p>
                        </div>
                      </div>
                      <div className={styles.editIcon}>
                        <BsFillPencilFill />
                      </div>
                    </li>
                  </>
                ))}
          </ul>
        </div>
      </div>
      <div onClick={handleAddInsurance} className={styles.InsuranceInfoBottom}>
        <p className={styles.pFontWhite}>
          <HiPlusSm /> Add Insurance
        </p>
      </div>
    </div>
  );
};

export default InsuranceModal;

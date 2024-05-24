import { useState } from "react";
import styles from "./AddOnlyInsuranceModal.module.css";
import { FaXmark } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import imgPicSample from "../../assets/insurance1Sample.png";
import { ModalStoreState } from "../../context/ModalStoreState";
import Button from "../../components/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import InsuranceModal from "./InsuranceModal";

const AddOnlyInsuranceModal = () => {
  const { closeModal, openModal } = ModalStoreState();
  const [imageSrc, setImageSrc] = useState("");

  const handleBackModal = () => {
    openModal(<InsuranceModal />);
  };
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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.InsuranceInfoContainer}>
      <div className={styles.InsuranceInfoTop}>
        <h2 className={styles.InsuranceInfoToph2}>
          <IoMdArrowRoundBack
            className="cursor-pointer"
            onClick={handleBackModal}
          />
          Insurance List
        </h2>
        <FaXmark className="cursor-pointer" onClick={handleCloseModalX} />
      </div>
      <div className={styles.InsuranceInfoBody}>
        <div className={styles.InsuranceInfoBodyTop}>
          <div className={styles.borderInsuranceImg}>
            <div className={styles.forPositionRelative}>
              <img
                className={styles.imgPicInsurance}
                src={imageSrc}
                alt={imageSrc}
              />
              <button className={styles.cameraEDIT}>
                <IoCameraSharp />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className={styles.fileInput}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.InsuranceInfoBodyBottom}>
          <div className={styles.BodyText}>
            <span>Company:</span>{" "}
            <input className={styles.inputField} type="text" name="" id="" />
          </div>
          <div className={styles.BodyText}>
            <span>Pricing:</span>{" "}
            <input className={styles.inputField} type="text" name="" id="" />
          </div>
        </div>
      </div>
      <div className={styles.InsuranceInfoBottom}>
        <div className={styles.InsuranceInfoBottomDiv}>
          <div className={styles.InsuranceInfoBottomDivFlex}>
            <Button
              buttonStyle={"quaternaryBorder"}
              type={"submit"}
              icon={"cross"}
              onClick={handleBackModal}
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

export default AddOnlyInsuranceModal;

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddEditInsuranceModal.module.css";
import { FaXmark } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import imgPicSample from "../../assets/insurance1Sample.png";
import { ModalStoreState } from "../../context/ModalStoreState";
import Button from "../../components/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import * as apiClient from "../../service/ApiClient";
import InsuranceModal from "./InsuranceModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoaderCustom from "../loaders/LoaderCustom";
import toast from "react-hot-toast";

const AddEditInsuranceModal = ({ insuranceId }) => {
  const { closeModal, openModal } = ModalStoreState();
  const {
    data: insuranceSoloId,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["insuranceSolo", insuranceId],
    queryFn: apiClient.getSoloInsurancebyID,
    refetchOnWindowFocus: false,
  });

  const { mutate: deleteInsuranceMutate } = useMutation({
    mutationFn: apiClient.deleteInsurance,
    onSuccess: () => {
      toast.success("Insurance deleted successfully");
      closeModal();
    },
    onError: () => {
      toast.error("Something went wrong. Please try again");
    },
  });

  // Initialize form data with empty strings
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  // Function to handle input changes for all fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBackModal = () => {
    //console.log(insuranceSoloId);
    openModal(<InsuranceModal />);
  };

  const handleDeleteInsurance = () => {
    deleteInsuranceMutate({ mutationKey: ["deleteInsurance", insuranceId] });
  };

  const handleCloseModalX = () => {
    closeModal();
  };

  const handleSaveInsurance = () => {
    console.log("test");
  };

  useEffect(() => {
    if (!isLoading && insuranceSoloId?.result) {
      setFormData({
        name: insuranceSoloId.result.name || "",
        price: insuranceSoloId.result.price || "",
      });
    }
  }, [insuranceSoloId, isLoading]);

  if (isError) {
    return <p>Error</p>;
  }

  return (
    <div className={styles.InsuranceInfoContainer}>
      <div className={styles.InsuranceInfoTop}>
        <h2 className={styles.InsuranceInfoToph2}>
          <IoMdArrowRoundBack
            className="cursor-pointer"
            onClick={handleBackModal}
          />
          Edit Insurance
        </h2>
        <FaXmark className="cursor-pointer" onClick={handleCloseModalX} />
      </div>
      {isLoading ? (
        <LoaderCustom />
      ) : (
        <div className={styles.InsuranceInfoBody}>
          <div className={styles.InsuranceInfoBodyTop}>
            <div className={styles.borderInsuranceImg}>
              <div className={styles.forPositionRelative}>
                <img
                  className={styles.imgPicInsurance}
                  src={imgPicSample}
                  alt="Insurance Sample"
                />
                <button className={styles.cameraEDIT}>
                  <IoCameraSharp />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.InsuranceInfoBodyBottom}>
            <div className={styles.BodyText}>
              <span>Company:</span>{" "}
              <input
                className={styles.inputField}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.BodyText}>
              <span>Pricing:</span>{" "}
              <input
                className={styles.inputField}
                type="text"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )}

      <div className={styles.InsuranceInfoBottom}>
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

export default AddEditInsuranceModal;

AddEditInsuranceModal.propTypes = {
  insuranceId: PropTypes.string.isRequired,
};

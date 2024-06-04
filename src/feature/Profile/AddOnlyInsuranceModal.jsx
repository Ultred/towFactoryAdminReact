import { useState } from "react";
import styles from "./AddOnlyInsuranceModal.module.css";
import { FaXmark } from "react-icons/fa6";
import { IoCameraSharp } from "react-icons/io5";
import * as apiClient from "../../service/ApiClient";
import { ModalStoreState } from "../../context/ModalStoreState";
import Button from "../../components/Button";
import { IoMdArrowRoundBack } from "react-icons/io";
import InsuranceModal from "./InsuranceModal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const AddOnlyInsuranceModal = () => {
  const queryClient = useQueryClient();
  const { closeModal, openModal } = ModalStoreState();
  const [imageSrc, setImageSrc] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const { mutate } = useMutation({
    mutationKey: ["addInsurance"],
    mutationFn: apiClient.postCreateInsurance,
    onSuccess: async () => {
      toast.success("Insurance Added successfully");
      await queryClient.invalidateQueries({
        queryKey: ["insuranceData"],
      });
      closeModal();
      //openModal(<InsuranceModal />);
    },
    onError: (error) => {
      toast.error(error || "Something went wrong. Please try again");
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    status: true,
  });
  const handleBackModal = () => {
    openModal(<InsuranceModal />);
  };
  const handleCloseModalX = () => {
    closeModal();
  };

  const handleSaveInsurance = () => {
    if (!formData.name || !formData.price) {
      toast.error("Please fill all fields");
      return;
    }
    if (!imageSrc) {
      toast.error("Please upload an image");
      return;
    }

    const sendformData = new FormData();
    sendformData.append("data", JSON.stringify(formData));
    sendformData.append("insuranceFile", imageFile);
    mutate(sendformData);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
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
          Add Insurance
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
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={styles.inputField}
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className={styles.BodyText}>
            <span>Pricing:</span>{" "}
            <input
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className={styles.inputField}
              type="number"
              name="price"
              id="price"
            />
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

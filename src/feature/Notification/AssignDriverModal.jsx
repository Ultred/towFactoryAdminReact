import styles from "./AssignDriverModal.module.css";
import { driverData } from "../../utils/DataSample";
import { FaXmark } from "react-icons/fa6";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import NoficationModal from "./NoficationModal";
import callIcon from "../../assets/callIcon.svg";
import { useState } from "react";
import { ModalStoreState } from "../../context/ModalStoreState";
import SortComponent from "../../components/SortComponent";
import BookingInfoModal from "./BookingInfoModal";
const AssignDriverModal = () => {
  const { openModal, closeModal } = ModalStoreState();
  const [selectedDriver, setSelectedDriver] = useState(null);

  const handleDriverSelect = (id) => {
    setSelectedDriver(id);
  };

  const handleShowBookingInfoModal = () => {
    openModal(<BookingInfoModal />);
  };
  const handleShowNotifModal = () => {
    openModal(<NoficationModal />);
  };
  return (
    <div className={styles.assignDriverModalContainer}>
      <div className={styles.assignDriverModalTop}>
        <h2 className={styles.assignDriverModalh2}>Assign Driver</h2>
        <FaXmark onClick={closeModal} />
      </div>
      <div className={styles.assignDriverModalBody}>
        <div className={styles.flexTopData}>
          <h2 className={styles.flexTopDatah2}>Driver&apos;s Name</h2>
          <SortComponent />
        </div>

        {driverData.map((data) => (
          <div
            className={`${styles.containerDriverBody} ${
              selectedDriver === data.id ? styles.active : ""
            }`}
            key={data.id}
            onClick={() => handleDriverSelect(data.id)}
          >
            <div className={styles.containerDriverPicandName}>
              <Avatar status={data.status} />
              <div>
                <h2 className={styles.containerDriverPicandNameh2}>
                  {data.name}
                </h2>
                <p className={styles.containerDriverPicandNameP}>
                  {data.status}
                </p>
              </div>
            </div>
            <button className={styles.buttonCall}>
              <img src={callIcon} alt="call" />
            </button>
          </div>
        ))}
      </div>
      <div className={styles.assignDriverModalBottom}>
        <Button
          icon={"cross"}
          onClick={handleShowNotifModal}
          buttonStyle={"buttonCustom1"}
        >
          Cancel
        </Button>
        <Button
          onClick={handleShowBookingInfoModal}
          icon={"check"}
          buttonStyle={"secondary"}
        >
          Assign Driver
        </Button>
      </div>
    </div>
  );
};

export default AssignDriverModal;

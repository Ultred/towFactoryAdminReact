import styles from "./AssignDriverModal.module.css";
import { FaXmark } from "react-icons/fa6";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import NoficationModal from "./NoficationModal";
import callIcon from "../../assets/callIcon.svg";
import { useEffect, useState } from "react";
import { ModalStoreState } from "../../context/ModalStoreState";
import SortComponent from "../../components/SortComponent";
import BookingInfoModal from "./BookingInfoModal";
import * as apiClient from "../../service/ApiClient";
import { useQuery } from "@tanstack/react-query";
import { SaveNotifBookingSolo } from "../../context/SaveNotifBookingState";
import toast from "react-hot-toast";
import LoaderCustom from "../loaders/LoaderCustom";

const AssignDriverModal = () => {
  const { openModal, closeModal } = ModalStoreState();
  const { soloBookNotifValue, setSoloBookNotifValue } = SaveNotifBookingSolo();
  const [selectedDriver, setSelectedDriver] = useState(null);

  const { data: driverDatas, isLoading } = useQuery({
    queryKey: ["driverData"],
    queryFn: apiClient.getAllDrivers,
    refetchOnWindowFocus: true,
  });

  const filteredDriverData = (status) => {
    if (!driverDatas) return [];
    if (status === "Available") {
      return driverDatas.result.filter((driver) => driver.status === status);
    } else {
      return driverDatas.result.filter(
        (driver) => driver.status !== "Available"
      );
    }
  };

  const availableDrivers = filteredDriverData("Available");

  const handleDriverSelect = (driverData) => {
    //console.log(availableDrivers);
    setSoloBookNotifValue({ ...soloBookNotifValue, driverData });
    setSelectedDriver(driverData.id);
  };
  useEffect(() => {
    if (soloBookNotifValue.driverData) {
      setSelectedDriver(soloBookNotifValue.driverData.id);
    }
  }, []);

  const handleShowBookingInfoModal = () => {
    if (selectedDriver) {
      openModal(<BookingInfoModal />);
    } else {
      toast.error("Please select driver first");
    }
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
        {isLoading ? (
          <LoaderCustom />
        ) : (
          <div className={styles.slider}>
            {availableDrivers.map((data) => (
              <div
                className={`${styles.containerDriverBody} ${
                  selectedDriver === data.id ? styles.active : ""
                }`}
                key={data.id}
                onClick={() => handleDriverSelect(data)}
              >
                <div className={styles.containerDriverPicandName}>
                  <Avatar status={data.status} />
                  <div>
                    <h2 className={styles.containerDriverPicandNameh2}>
                      {data.firstName} {data.lastName}
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
        )}
      </div>
      <div className={styles.assignDriverModalBottom}>
        <div className="w-[40%]">
          <Button
            icon={"cross"}
            onClick={handleShowNotifModal}
            buttonStyle={"buttonCustom1"}
          >
            Cancel
          </Button>
        </div>
        <div className="w-[60%]">
          <Button
            onClick={handleShowBookingInfoModal}
            icon={"check"}
            buttonStyle={"secondary"}
          >
            Assign Driver
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssignDriverModal;

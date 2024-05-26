import styles from "./TodayAttendance.module.css";
import { driverData } from "../../utils/DataSample";
import Avatar from "../../components/Avatar";
import { ModalStoreState } from "../../context/ModalStoreState";
import DriverInfoModal from "./DriverInfoModal";
import SortComponent from "../../components/SortComponent";
import messageIcon from "../../assets/messagesIcon.svg";
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../../service/ApiClient";
const TodayAttendance = () => {
  const { openModal } = ModalStoreState();

  const { data: driverDataALL, isLoading } = useQuery({
    queryKey: ["driverDataAll"],
    queryFn: apiClient.getAllDrivers,
    refetchOnWindowFocus: false,
  });

  const handleDriverOpenModal = () => {
    //console.log(driverDataALL?.result);
    openModal(<DriverInfoModal />);
  };
  return (
    <div className={styles.TodayAttendanceCont}>
      <div className={styles.flexTopData}>
        <h2 className={styles.flexTopDatah2}>Driver&apos;s Name</h2>
        <SortComponent />
      </div>
      <div className={styles.containerDriverBody}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          driverDataALL?.result?.map((data) => {
            return (
              <div key={data.id} className={styles.containerDriverFlex}>
                <div
                  onClick={handleDriverOpenModal}
                  className={styles.flexDriverPicandName}
                >
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
                <div className={styles.flexButton}>
                  <button className={styles.buttonClick}>
                    <img src={messageIcon} alt="message" />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TodayAttendance;

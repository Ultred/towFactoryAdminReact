import Avatar from "../../components/Avatar";
import { driverData } from "../../utils/DataSample";
import styles from "./HistoryDriver.module.css";

const HistoryDriver = () => {
  return (
    <div className={styles.historyDriverContainer}>
      <div className={styles.historyDriveCont1}>
        <h2 className={styles.texth2Style}>Drivers Name</h2>
        <div>
          {driverData.map((data) => (
            <div className={styles.historyDriveFlex} key={data.id}>
              <Avatar status={data.status} />
              <div>
                <p>{data.name}</p>
                <p>{data.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.historyDriveCont2}>
        <div></div>
      </div>
    </div>
  );
};

export default HistoryDriver;

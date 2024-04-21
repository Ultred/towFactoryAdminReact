import Avatar from "../../components/Avatar";
import { FaCalendarDays } from "react-icons/fa6";
import { driverData } from "../../utils/DataSample";
import styles from "./HistoryDriver.module.css";
import SortComponent from "../../components/SortComponent";
import driverProfilePic from "../../assets/driverPic1.svg";
const HistoryDriver = () => {
  return (
    <div className={styles.historyDriverContainer}>
      <div className={styles.historyDriveCont1}>
        <h2 className={styles.texth2Large}>Drivers Name</h2>
        <div className={styles.driverContData}>
          {driverData.map((data) => (
            <div className={styles.historyDriveFlex} key={data.id}>
              <Avatar status={data.status} />
              <div className={styles.flexDirection}>
                <p className={styles.texth2Style}>{data.name}</p>
                <p className={styles.texth2Stylep}>{data.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.historyDriveCont2}>
        <div className={styles.flexHistoryDriveCont2}>
          <SortComponent />
          <button className={styles.flexCalendar}>
            <FaCalendarDays /> Calendar
          </button>
        </div>
        <div className={styles.contHistoryDriverMain}>
          <div className={styles.contDriverTop}>
            <span>Icon </span>
            <img src={driverProfilePic} alt="profileDriver" />
          </div>
          <div className={styles.textMainCenter}>
            <h2 className={styles.texth2Large}>John Batumbakal</h2>

            <p className={styles.textBlue}>TOTAL OF TRIPS: 2</p>
            <div className={styles.textLeft}>
              <p>AD-ONS (SPECIAL TOOLS)</p>
              <ul>
                <li>ROLLER </li>
                <li>BATTERY CHARGER </li>
              </ul>
            </div>
          </div>
          <div className={styles.textMainBottom}>
            <p>
              Total amount : <span>1000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryDriver;

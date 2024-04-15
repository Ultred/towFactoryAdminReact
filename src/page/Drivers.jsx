import SecondNavbar from "../components/SecondNavbar";
import TodayAttendance from "../feature/Drivers/TodayAttendance";
import styles from "./Drivers.module.css";

const sampleDriverNavbarData = ["TODAY'S ATTENDANCE", "HISTORY", "EXTRA"];

const Drivers = () => {
  return (
    <div className={styles.driversContainer}>
      <SecondNavbar data={sampleDriverNavbarData} />
      <TodayAttendance />
    </div>
  );
};

export default Drivers;

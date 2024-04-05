import SecondNavbar from "../components/SecondNavbar";
import styles from "./Drivers.module.css";

const sampleDriverNavbarData = ["TODAY'S ATTENDANCE", "HISTORY", "EXTRA"];

const Drivers = () => {
  return (
    <div className={styles.driversContainer}>
      <SecondNavbar data={sampleDriverNavbarData} />
      Driver
    </div>
  );
};

export default Drivers;

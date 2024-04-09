import styles from "./Schedule.module.css";
import SecondNavbar from "../components/SecondNavbar";

const sampleDriverNavbarData = ["TODAY", "UPCOMING"];

const Schedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <SecondNavbar data={sampleDriverNavbarData} />
      Schedule
    </div>
  );
};

export default Schedule;

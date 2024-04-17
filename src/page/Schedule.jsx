import styles from "./Schedule.module.css";
import SecondNavbar from "../components/SecondNavbar";
import CardData from "../components/CardData";
import { scheduleData } from "../utils/DataSample";
const sampleDriverNavbarData = ["TODAY", "UPCOMING"];

const Schedule = () => {
  const handleScheduleShowItem = (index) => {
    console.log(index);
  };
  return (
    <>
      <div className={styles.scheduleContainer}>
        <SecondNavbar
          onItemClick={handleScheduleShowItem}
          data={sampleDriverNavbarData}
        />
        <div className={styles.scheduleContainer2}>
          <h2 className={styles.scheduleContainer2h2}>Schedule Today</h2>
          {scheduleData.map((schedule) => (
            <CardData key={schedule.id} data={schedule} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;

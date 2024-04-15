import styles from "./TodayAttendance.module.css";
import { driverData } from "../../../utils/DataSample";
import Avatar from "../../../components/Avatar";

const TodayAttendance = () => {
  return (
    <div className={styles.TodayAttendanceCont}>
      <div className={styles.flexTopData}>
        <h2 className={styles.flexTopDatah2}>Driver&apos;s Name</h2>
        <div className={styles.flexSortby}>
          <p>Sort by: </p>
          <select className={styles.selectStyle} name="" id="">
            <option value="option1">Name A-Z</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
      <div className={styles.containerDriverBody}>
        {driverData.map((data) => {
          return (
            <div key={data.id} className={styles.containerDriverFlex}>
              <div className={styles.flexDriverPicandName}>
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
              <div className={styles.flexButton}>
                <button className={styles.buttonClick}>
                  <img src="/src/assets/messagesIcon.svg" alt="message" />
                </button>
                <button className={styles.buttonClick}>
                  <img src="/src/assets/callIcon.svg" alt="call" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodayAttendance;

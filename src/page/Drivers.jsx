import { useState } from "react";
import SecondNavbar from "../components/SecondNavbar";
import TodayAttendance from "../feature/Drivers/TodayAttendance";
import styles from "./Drivers.module.css";
import HistoryDriver from "../feature/Drivers/HistoryDriver";

const sampleDriverNavbarData = ["TODAY'S ATTENDANCE", "HISTORY"];

const Drivers = () => {
  const [selectedItem, setSelectedItem] = useState("TODAY'S ATTENDANCE");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div className={styles.driversContainer}>
      <SecondNavbar
        onItemClick={handleItemClick}
        data={sampleDriverNavbarData}
      />
      {selectedItem === "HISTORY" ? <HistoryDriver /> : <TodayAttendance />}
    </div>
  );
};

export default Drivers;

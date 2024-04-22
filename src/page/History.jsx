import styles from "./History.module.css";
import Calendar from "react-calendar";
import { historyData } from "../utils/DataSample";

import "./Calendar.css";
import CardData from "../components/CardData";
import SecondNavbar from "../components/SecondNavbar";
import { useState } from "react";
import printIcon from "../assets/printIcon.svg";
const TripsNavbarSampleData = ["ALL", "CLIENT 1", "CLIENT 2"];
const History = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleShowItemTrips = (data) => {
    console.log(data);
    console.log(selectedDate);
  };
  return (
    <>
      <div className={styles.printAllposition}>
        <button className={styles.buttonPrint}>
          <img src={printIcon} alt="printIcon" />
          Print All
        </button>
      </div>
      <div>
        <SecondNavbar
          onItemClick={handleShowItemTrips}
          data={TripsNavbarSampleData}
        />
      </div>
      <div className={styles.historyContainer}>
        <div>
          {historyData.map((data) => (
            <CardData key={data.id} data={data} />
          ))}
        </div>
        <div>
          <Calendar onChange={(date) => setSelectedDate(date)} />
        </div>
      </div>
    </>
  );
};

export default History;

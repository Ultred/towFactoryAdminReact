import styles from "./History.module.css";
import Calendar from "react-calendar";
import { historyData } from "../utils/DataSample";
import NotfoundDiv from "../components/NotFOUND/NotfoundDiv";
import "./Calendar.css";
import CardData from "../components/CardData";
import SecondNavbar from "../components/SecondNavbar";
import { useState } from "react";
import printIcon from "../assets/printIcon.svg";
import moment from "moment";

const TripsNavbarSampleData = ["ALL", "CLIENT 1", "CLIENT 2"];

const History = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState(historyData);

  const handleShowItemTrips = (data) => {
    if (data === "ALL") {
      setFilteredData(historyData);
    } else {
      // Handle other cases if needed
    }
    console.log(data);
    console.log(selectedDate);
  };

  const handleFilteredData = (date) => {
    const formattedDate = moment(date).format("MMMM D, YYYY");
    const filteredData = historyData.filter((data) => {
      return (
        data.datePlaced === formattedDate ||
        data.dateScheduled === formattedDate
      );
    });
    setFilteredData(filteredData);
    console.log(formattedDate);
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
        {filteredData.length === 0 ? (
          <NotfoundDiv />
        ) : (
          <div>
            {filteredData.map((data) => (
              <CardData key={data.id} data={data} />
            ))}
          </div>
        )}

        <div>
          <Calendar onChange={(date) => handleFilteredData(date)} />
        </div>
      </div>
    </>
  );
};

export default History;

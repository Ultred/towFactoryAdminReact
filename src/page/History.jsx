import styles from "./History.module.css";
import Calendar from "react-calendar";
import { tripsData } from "../utils/DataSample";

import "./Calendar.css";
import CardData from "../components/CardData";
import SecondNavbar from "../components/SecondNavbar";

const TripsNavbarSampleData = ["ALL", "CLIENT 1", "CLIENT 2"];
const History = () => {
  const handleShowItemTrips = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <SecondNavbar
          onItemClick={handleShowItemTrips}
          data={TripsNavbarSampleData}
        />
      </div>
      <div className={styles.historyContainer}>
        <div>
          {tripsData.map((data) => (
            <CardData key={data.id} data={data} />
          ))}
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default History;

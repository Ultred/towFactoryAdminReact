import styles from "./History.module.css";
import Calendar from "react-calendar";
import { tripsData } from "../utils/DataSample";

import "./Calendar.css";
import CardData from "../components/CardData";
const History = () => {
  return (
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
  );
};

export default History;

import { useState } from "react";
import CardData from "../components/CardData";
import SecondNavbar from "../components/SecondNavbar";
import styles from "./Trips.module.css";
import { tripsData } from "../utils/DataSample";
const TripsNavbarSampleData = ["ALL", "IN TRANSIT", "CANCELLED", "DELIVERED"];

const Trips = () => {
  const [filteredTrips, setFilteredTrips] = useState(tripsData);
  const handleShowItemTrips = (index) => {
    if (index == "ALL") {
      setFilteredTrips(tripsData);
    } else {
      const filterTripsData = tripsData.filter(
        (trip) => trip.status.toUpperCase() === index.toUpperCase()
      );
      setFilteredTrips(filterTripsData);
    }
  };

  return (
    <>
      <div className={styles.tripsContainer}>
        <SecondNavbar
          onItemClick={handleShowItemTrips}
          data={TripsNavbarSampleData}
        />
        {filteredTrips.map((trip) => (
          <CardData key={trip.id} data={trip} />
        ))}
      </div>
    </>
  );
};

export default Trips;

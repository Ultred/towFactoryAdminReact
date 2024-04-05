import CardData from "../components/CardData";
import NoficationModal from "../components/NoficationModal";
import SecondNavbar from "../components/SecondNavbar";
import styles from "./Trips.module.css";

const TripsNavbarSampleData = ["ALL", "IN TRANSIT", "CANCELLED", "DELIVERED"];
const Trips = () => {
  return (
    <>
      <div className={styles.tripsContainer}>
        <SecondNavbar data={TripsNavbarSampleData} />
        <CardData />
        <CardData />
        <NoficationModal />
      </div>
    </>
  );
};

export default Trips;

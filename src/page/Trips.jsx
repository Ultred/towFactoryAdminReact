import AssignDriverModal from "../components/AssignDriverModal";
import BookingInfoModal from "../components/BookingInfoModal";
import CardData from "../components/CardData";
import NoficationModal from "../components/NoficationModal";
import RejectionNotifModal from "../components/RejectionNotifModal";
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
        <RejectionNotifModal />
        <AssignDriverModal />
        <BookingInfoModal />
      </div>
    </>
  );
};

export default Trips;

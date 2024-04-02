import NoficationModal from "../components/NoficationModal";
import TripsNavbar from "../feature/Trips/TripsNavbar";
import styles from "./Trips.module.css";

const Trips = () => {
  return (
    <>
      <div className={styles.tripsContainer}>
        <TripsNavbar
          data={[
            "All",
            "ON CHECKING",
            "CONFIRMATION",
            "FOR PICK-UP",
            "IN TRANSIT",
            "DROP-OFF",
            "RECEIVED",
            "CANCELLED",
          ]}
        />
        <div className={styles.tripsDataContainer}>
          <div className={styles.tripsDataContainerTop}>
            <h2>
              TRACKING NUMBER : <span>TF0123456789</span>
            </h2>
          </div>
          <div className={styles.tripsDataContainerBody}>
            <div className={styles.tripsDataContainerBodyLeft}>
              <p>
                STATUS: <span>On Cheking</span>
              </p>
              <p>
                CLIENT: <span className={styles.boldText}>Juan Dela Cruz</span>
              </p>
              <p>
                MANUFACTURER: <span className={styles.boldText}>HONDA</span>
              </p>
              <p>
                PLATE NUMBER: <span className={styles.boldText}>ABC 124</span>
              </p>
            </div>
            <div className={styles.tripsDataContainerBodyRight}>
              <div className={styles.flexDataContainer}>
                <img src="/src/assets/date.svg" alt="" />
                <div>
                  <p>
                    Date Placed: <span>March 13: 2024</span>
                  </p>
                  <p>
                    Date Scheduled: <span>March 20: 2024</span>
                  </p>
                </div>
              </div>
              <div className={styles.flexDataContainer}>
                <img src="/src/assets/pickUpblue.svg" alt="" />
                <p>
                  839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila
                </p>
              </div>
              <div className={styles.flexDataContainer}>
                <img src="/src/assets/dropOffred.svg" alt="" />
                <p>Espana, Manila City, Metro Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NoficationModal />
    </>
  );
};

export default Trips;

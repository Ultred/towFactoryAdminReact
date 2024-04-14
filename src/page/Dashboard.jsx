import CurrentDate from "../components/CurrentDate";
import Searchbar from "../components/Searchbar";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import { transitData, driverData } from "../utils/DataSample";
import Avatar from "../components/Avatar";
import Calendar from "react-calendar";
import "./Calendar.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.flexJustify}>
        <CurrentDate />
        <div className={styles.search}>
          <Searchbar />
        </div>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.flexLeft}>
          <div className={styles.nameContainer}>
            <div className={styles.dataStyles}>
              <h1 className={styles.dataStylesh1}>Hello, Admin Bruno!</h1>
              <p className={styles.dataStylesp}>
                Welcome Again, We Have a good weather today
              </p>
              <div className={styles.dataStylesIcon}>
                <FaTemperatureThreeQuarters className="w-5 h-5" />
                <p>
                  <span className=" font-bold">+25&apos;C </span>
                  Outdoor Temperature
                </p>
              </div>
              <div className={styles.dataStylesIcon}>
                <FaCloudSun className="w-5 h-5" />
                <p>Sunny Weather</p>
              </div>
            </div>
            <img
              className={styles.imgstyles}
              src="src/assets/dashboardPic.svg"
              alt="admin"
            />
          </div>
          <div className={styles.dashboardContainerBg}>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Scheduled Today</h2>
              <p className={styles.containerViewAll}>View all</p>
            </div>
            <div className={styles.scheduleContainerTop}>
              <h2>Tracking Number TF12</h2>
            </div>
            <div className={styles.scheduleContainerBody}>
              <div className={styles.scheduleContainerData}>
                <p>
                  STATUS:
                  <span className={styles.scheduleContainerBold1}>
                    Confirmation
                  </span>
                </p>
                <p>
                  CLIENT:
                  <span className={styles.scheduleContainerBold}>
                    Batong Bakal
                  </span>
                </p>
                <p>
                  MANUFACTURER:
                  <span className={styles.scheduleContainerBold}>Honda</span>
                </p>
                <p>
                  PLATE NUMBER:
                  <span className={styles.scheduleContainerBold}>ABC 124</span>
                </p>
                <div className={styles.flexAlign}>
                  <img src="/src/assets/pickupBlue.svg" alt="" />
                  <p>Dropoff Location Sample</p>
                </div>
                <div className={styles.flexAlign}>
                  <img src="/src/assets/dropOffred.svg" alt="" />
                  <p>PickUp Location Sample</p>
                </div>
              </div>
              <div className={styles.scheduleContainerNotes}>
                <div className={styles.scheduleContainerNotesTop}>
                  <h2>NOTE:</h2>
                </div>
                <div className={styles.scheduleContainerNotesBody}>
                  <p>Cannot Start The Vehicle</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dashboardContainerBg}>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>In Transit</h2>
              <p className={styles.containerViewAll}>View all</p>
            </div>
            <div className={styles.slider}>
              {transitData.map((data, index) => (
                <div className={styles.transitData} key={index}>
                  <div className={styles.transitDataTop}>
                    <h2>
                      Tracking Number: <span>{data.trackingNumber}</span>
                    </h2>
                  </div>
                  <div className={styles.transitDataBody}>
                    <p>
                      CLIENT:
                      <span className={styles.scheduleContainerBold}>
                        {data.client}
                      </span>
                    </p>
                    <p>
                      MANUFACTURER:
                      <span className={styles.scheduleContainerBold}>
                        {data.manufacturer}
                      </span>
                    </p>
                    <p>
                      PLATE NUMBER:
                      <span className={styles.scheduleContainerBold}>
                        {data.plateNumber}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.flexRight}>
          <div className={styles.dashboardContainerBg}>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Calendar</h2>
              <p className={styles.containerViewAll}>View all</p>
            </div>
            <div>
              <Calendar />
            </div>
          </div>
          <div className={styles.dashboardContainerBg}>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Driver(Available)</h2>
              <p className={styles.containerViewAll}>View all</p>
            </div>
            <div className={styles.slider}>
              {driverData.map((driver, index) => (
                <div className={styles.driverSlideContent} key={index}>
                  <Avatar status={driver.status} />
                  <h3 className={styles.containerBold}>{driver.name}</h3>
                  <p className={styles.driverFontsmall}>{driver.status}</p>
                </div>
              ))}
            </div>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Driver(Not Available)</h2>
            </div>
            <div>
              <Avatar status="notAvailable" />
              <h3>Juan</h3>
              <p>Not Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import CurrentDate from "../components/CurrentDate";
import Searchbar from "../components/Searchbar";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import { FaCloudSun } from "react-icons/fa";
import styles from "./Dashboard.module.css";
import { transitData, driverData } from "../utils/DataSample";
import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./Calendar.css";

import dashboardPic from "../assets/dashboardPic.svg";
import dropOffRed from "../assets/dropOffred.svg";
import pickupBlue from "../assets/pickUpblue.svg";
import { useQuery } from "@tanstack/react-query";
import * as apiClient from "../service/ApiClient";
const Dashboard = () => {
  //Code For Get filter Drivers
  const { data: driverDatas, isLoading } = useQuery({
    queryKey: ["driverData"],
    queryFn: apiClient.getAllDrivers,
    refetchOnWindowFocus: false,
  });
  const { data: intransitData, isLoading: transitIsLoading } = useQuery({
    queryKey: ["intransitDataAll"],
    queryFn: apiClient.getOnlyTransitBookingsPagination,
    refetchOnWindowFocus: false,
  });

  const filteredDriverData = (status) => {
    if (!driverDatas) return [];
    if (status === "Available") {
      return driverDatas.result.filter((driver) => driver.status === status);
    } else {
      return driverDatas.result.filter(
        (driver) => driver.status !== "Available"
      );
    }
  };
  const availableDrivers = filteredDriverData("Available");
  const notAvailableDrivers = filteredDriverData("NotAvailableAll");

  //
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
              <h1
                onClick={() => console.log(availableDrivers)}
                className={styles.dataStylesh1}
              >
                Hello, Admin Aldrin!
              </h1>
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
            <img className={styles.imgstyles} src={dashboardPic} alt="admin" />
          </div>
          <div className={styles.dashboardContainerBg}>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Scheduled Today</h2>
              <Link to="/schedule">
                <p className={styles.containerViewAll}>View all</p>
              </Link>
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
                  <img src={pickupBlue} alt="" />
                  <p>Dropoff Location Sample</p>
                </div>
                <div className={styles.flexAlign}>
                  <img src={dropOffRed} alt="" />
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
              <Link to={"/dashboard"}>
                <p className={styles.containerViewAll}>View all</p>
              </Link>
            </div>
            <div className={styles.slider}>
              {intransitData?.result?.map((data) => (
                <div className={styles.transitData} key={data.id}>
                  <div className={styles.transitDataTop}>
                    <h2>
                      Tracking Number: <span>{data.trackingNo}</span>
                    </h2>
                  </div>
                  <div className={styles.transitDataBody}>
                    <p>
                      CLIENT:
                      <span className={styles.scheduleContainerBold}>
                        {data.user.firstName} {data.user.lastName}
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
                        {data.plateNum}
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
              <h2
                onClick={() => console.log(intransitData)}
                className={styles.containerTitle}
              >
                Calendar
              </h2>
              <p className={styles.containerViewAll}>View all</p>
            </div>
            <div>
              <Calendar />
            </div>
          </div>
          <div className={`${styles.dashboardContainerBg} ${styles.maxwidth}`}>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Driver(Available)</h2>
              <Link to={"/drivers"}>
                <p className={styles.containerViewAll}>View all</p>
              </Link>
            </div>
            <div className={styles.slider}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                availableDrivers.map((driver) => (
                  <div className={styles.driverSlideContent} key={driver.id}>
                    <Avatar status={driver.status} />
                    <h3 className={styles.containerBold}>{driver.firstName}</h3>
                    <p className={styles.driverFontsmall}>{driver.status}</p>
                  </div>
                ))
              )}
            </div>
            <div className={styles.flexJustify}>
              <h2 className={styles.containerTitle}>Driver(Not Available)</h2>
            </div>
            <div className={styles.slider}>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                notAvailableDrivers.map((driver) => (
                  <div className={styles.driverSlideContent} key={driver.id}>
                    <Avatar status={driver.status} />
                    <h3 className={styles.containerBold}>{driver.firstName}</h3>
                    <p className={styles.driverFontsmall}>{driver.status}</p>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={`${styles.dashboardContainerBg} ${styles.maxheigth}`}>
            <div className="h-[85%]">
              <div className={styles.scheduleContainerNotesTop}>
                <h2>NOTE:</h2>
              </div>
              <div className={styles.scheduleContainerNotesBody}>
                <p>Sample Note</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

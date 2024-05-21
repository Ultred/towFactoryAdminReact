import { Link, NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import profileIcon from "../assets/profile-icon.png";
import logoIcon from "../assets/towfactoryLogo.svg";
import { ModalStoreState } from "../context/ModalStoreState";
import NoficationModal from "../feature/Notification/NoficationModal";
import { useQuery } from "@tanstack/react-query";
import bellIcon from "../assets/bell.svg";
import * as apiClient from "../service/ApiClient";
import { useEffect, useState } from "react";
import NoBookingFound from "../feature/Notification/NoBookingFound";

const Navbar = () => {
  const { openModal } = ModalStoreState();
  const [hasNewNotification, setHasNewNotification] = useState(false);
  const { data: notif, isFetching } = useQuery({
    queryKey: ["notifactionPending"],
    queryFn: apiClient.getPendingBookings,
    refetchInterval: 5000,
  });

  const playNotificationSound = () => {
    const audio = new Audio("/alarm.wav");
    audio.play().catch((error) => {
      console.error("Error playing notification sound:", error);
    });
  };

  const handleShowNotificationModal = () => {
    if (hasNewNotification && notif?.result?.length > 0) {
      const getOnlyOneNotif = notif.result[0];
      playNotificationSound();
      openModal(<NoficationModal notifData={getOnlyOneNotif} />);
    } else {
      openModal(<NoBookingFound />);
    }
  };

  useEffect(() => {
    if (notif && notif.result && notif.result.length > 0) {
      console.log(notif);
      setHasNewNotification(true);
      setTimeout(() => {
        handleShowNotificationModal();
      }, 100);
    } else {
      setHasNewNotification(false);
    }
  }, [notif, isFetching]);

  return (
    <>
      <nav className={styles.navbar}>
        <img
          onClick={playNotificationSound}
          className={styles.imgLogo}
          src={logoIcon}
          alt="Logo"
        />
        <div className={styles.navButtons}>
          <ul className={styles.LinkFlex}>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : styles.navLink
                }
              >
                DASHBOARD
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/trips"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : styles.navLink
                }
              >
                TRIPS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : styles.navLink
                }
              >
                HISTORY
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/schedule"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : styles.navLink
                }
              >
                SCHEDULE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/drivers"
                className={({ isActive }) =>
                  isActive ? `${styles.active}` : styles.navLink
                }
              >
                DRIVERS
              </NavLink>
            </li>
            <div className={styles.flexIconNavbar}>
              <li
                className={`${styles.NotifIcon} ${
                  hasNewNotification ? styles.shake : ""
                }`}
                onClick={handleShowNotificationModal}
              >
                {hasNewNotification && (
                  <span className={styles.notificationIconDOTRED}></span>
                )}
                <img src={bellIcon} className={styles.profileIcon2} />
              </li>
              <li>
                <Link to="/profile">
                  <img src={profileIcon} className={styles.profileIcon} />
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import profileIcon from "../assets/profile-icon.png";
import notificationIcon from "../assets/notifications.svg";
import { ModalStoreState } from "../context/ModalStoreState";
import NoficationModal from "./NoficationModal";

const Navbar = () => {
  const { openModal } = ModalStoreState();

  const handleShowNotificationModal = () => {
    openModal(<NoficationModal />);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <img
          className={styles.imgLogo}
          src="src/assets/towfactoryLogo.svg"
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
              <li onClick={handleShowNotificationModal}>
                <img src={notificationIcon} className={styles.profileIcon} />
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

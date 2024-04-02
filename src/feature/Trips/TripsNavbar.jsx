import styles from "./TripsNavbar.module.css";

const TripsNavbar = ({ data }) => {
  return (
    <>
      <div className={styles.tripsNavbar}>
        <ul className={styles.tripsNavberUl}>
          {data.map((item, index) => (
            <li className={styles.tripsNavberLi} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TripsNavbar;

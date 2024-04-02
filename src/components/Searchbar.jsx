import styles from "./Searchbar.module.css";
import { FiSearch } from "react-icons/fi";
const Searchbar = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search..."
      />
      <button type="button" className={styles.searchIcon}>
        <FiSearch />
      </button>
    </div>
  );
};

export default Searchbar;

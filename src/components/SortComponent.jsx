import styles from "./SortComponent.module.css";

const options = [
  { value: "option1", label: "Name A-Z" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
const SortComponent = () => {
  return (
    <div className={styles.flexSortby}>
      <p>Sort by: </p>
      <select className={styles.selectStyle} name="" id="">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortComponent;

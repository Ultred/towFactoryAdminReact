import styles from "./SortComponent.module.css";
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "option1", label: "Name A-Z" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const SortComponent = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]); //default get first

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#e6eced",
      border: "none",
      fontWeight: 700,
      fontSize: "1rem",
      borderRadius: "0.5rem",
      outline: "none",
      boxShadow: state.isFocused ? null : null,
      minWidth: "150px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      overflow: "hidden",
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "1rem",
      backgroundColor: state.isSelected ? "#1c2cbc" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: state.isSelected ? "#1c2cbc" : "#f0f0f0",
      },
    }),
  };
  const handleSortChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className={styles.flexSortby}>
      <p>Sort by: </p>
      <Select
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={handleSortChange}
        options={options}
      />
    </div>
  );
};

export default SortComponent;

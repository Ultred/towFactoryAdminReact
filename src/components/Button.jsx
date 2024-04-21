import styles from "./Button.module.css";
import checkIcon from "../assets/checkIcon.svg";
import crossIcon from "../assets/crossiconWhite.svg";

const Button = ({ onClick, children, buttonStyle, type, icon }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (onClick) {
      onClick();
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "check":
        return checkIcon;
      case "cross":
        return crossIcon;
      default:
        return null;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]}`}
      onClick={handleClick}
      type={type}
    >
      {icon && (
        <img src={renderIcon(icon)} alt={icon} style={{ width: "20px" }} />
      )}
      {children}
    </button>
  );
};

export default Button;

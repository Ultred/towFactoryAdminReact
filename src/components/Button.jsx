import styles from "./Button.module.css";
import checkIcon from "../assets/checkIcon.svg";
import trashIcon from "../assets/trash.svg";
import crossIcon from "../assets/crossiconWhite.svg";

const Button = ({ onClick, children, buttonStyle, type, icon, isLoading }) => {
  const handleClick = (event) => {
    event.preventDefault();
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
      case "delete":
        return trashIcon;
      default:
        return null;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]}`}
      onClick={handleClick}
      type={type}
      disabled={isLoading}
    >
      {icon && (
        <img src={renderIcon(icon)} alt={icon} style={{ width: "20px" }} />
      )}
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;

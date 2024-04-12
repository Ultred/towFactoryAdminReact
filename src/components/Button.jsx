import styles from "./Button.module.css";

const Button = ({ onClick, children, buttonStyle, type, icon }) => {
  const handleClick = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (onClick) {
      onClick();
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "uphill":
        return "/src/assets/uphill.svg";
      case "check":
        return "/src/assets/checkIcon.svg";
      case "cross":
        return "/src/assets/crossiconWhite.svg";
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

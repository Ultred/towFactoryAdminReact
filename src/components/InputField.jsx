import styles from "./InputField.module.css";
import emailIcon from "../assets/email.svg";
import passwordIcon from "../assets/password.svg";
import dropoffIcon from "../assets/dropOff.svg";
import pickupIcon from "../assets/pickUp.svg";

const InputField = ({
  onChange,
  type,
  name,
  styletype,
  placeholder,
  icon,
  value,
}) => {
  const renderStyles = (styletype, hasIcon) => {
    let inputStyle = styles.primary;
    if (hasIcon) {
      inputStyle += ` ${styles.withIcon}`;
    }
    return inputStyle;
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "email":
        return emailIcon;
      case "password":
        return passwordIcon;
      case "dropoff":
        return dropoffIcon;
      case "pickUp":
        return pickupIcon;
      default:
        return null;
    }
  };

  return (
    <div className={styles.inputFieldContainer}>
      {icon && (
        <img
          className={styles.imgIconInput}
          src={renderIcon(icon)}
          alt="icon"
        />
      )}
      <input
        type={type}
        name={name}
        value={value}
        className={renderStyles(styletype, !!icon)}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;

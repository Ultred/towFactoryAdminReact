import React, { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { LuLock } from "react-icons/lu";
import styles from "./PasswordField.module.css";

const PasswordField = ({ label }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.flexDivInput}>
      <h2 className={styles.textPassLeft}>{label}</h2>
      <LuLock className={styles.iconLock} />
      <input
        className={styles.inputPass}
        type={showPassword ? "text" : "password"}
        name=""
        id=""
      />
      <span onClick={togglePasswordVisibility}>
        {showPassword ? (
          <GoEyeClosed className={styles.goeye} />
        ) : (
          <GoEye className={styles.goeye} />
        )}
      </span>
    </div>
  );
};

export default PasswordField;

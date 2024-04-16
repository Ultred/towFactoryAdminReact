import { useState } from "react";
import styles from "./IconFloatLeft.module.css";
import MessagesMain from "../feature/Messages/MessagesMain";

const IconFloatLeft = () => {
  const [showChat, setShowChat] = useState(false);

  const handleShowChatModal = () => {
    setShowChat((prev) => !prev);
  };

  const handleCloseChatModal = () => {
    console.log("close");
    setShowChat((prev) => !prev);
  };

  return (
    <>
      {showChat && <MessagesMain onClose={handleCloseChatModal} />}{" "}
      <div className={styles.iconFloatLeft}>
        <div className={styles.circleStyle}>
          <img
            className={styles.icon}
            src="/src/assets/callIcon.svg"
            alt="call"
          />
        </div>
        <div className={styles.circleStyle}>
          <img
            onClick={handleShowChatModal}
            className={styles.icon}
            src="/src/assets/messagesIcon.svg"
            alt="messages"
          />
        </div>
      </div>
    </>
  );
};

export default IconFloatLeft;

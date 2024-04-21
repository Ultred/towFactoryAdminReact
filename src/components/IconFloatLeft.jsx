import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import styles from "./IconFloatLeft.module.css";
import MessagesMain from "../feature/Messages/MessagesMain";
import callIcon from "../assets/callIcon.svg";
import messageIcon from "../assets/messagesIcon.svg";

const IconFloatLeft = () => {
  const [showChat, setShowChat] = useState(false);

  const handleShowChatModal = () => {
    setShowChat((prev) => !prev);
  };

  const handleCloseChatModal = () => {
    setShowChat((prev) => !prev);
  };

  return (
    <>
      <AnimatePresence>
        {showChat && (
          <>
            <motion.div
              style={{ position: "fixed", top: 0, right: 0, zIndex: 999 }}
              initial={{ x: 500, y: 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                stiffness: 260,
                damping: 20,
              }}
              exit={{ x: 500, y: 0, opacity: 0 }}
            >
              <MessagesMain onClose={handleCloseChatModal} />
            </motion.div>
            <div
              className={styles.overlay}
              onClick={handleCloseChatModal}
            ></div>
          </>
        )}
      </AnimatePresence>

      <div className={styles.iconFloatLeft}>
        <div className={styles.circleStyle}>
          <img className={styles.icon} src={callIcon} alt="call" />
        </div>
        <div className={styles.circleStyle}>
          <img
            onClick={handleShowChatModal}
            className={styles.icon}
            src={messageIcon}
            alt="messages"
          />
        </div>
      </div>
    </>
  );
};

export default IconFloatLeft;

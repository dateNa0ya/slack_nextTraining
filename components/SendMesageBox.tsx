import styles from "@/components/SendMessageBox.module.css";
import { useMessages } from "@/hooks/useMessage";
import React, { useState } from "react";

const SendMessageBox = () => {
  const [message, setMessage] = useState("");
  const { postMessage } = useMessages();

  const onClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const requestMessage = {
      id: "exmaple",
      body: message,
      channelId: "1",
      createdAt: new Date(),
    }
    postMessage(requestMessage);
    setMessage("");
  }
  
  return (
    <div className={styles.body}>
      <div className={styles.header}></div>
      <textarea 
        className={styles["message-box"]}
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={onClickSend}>Send</button>
    </div>
  );
};

export default SendMessageBox;
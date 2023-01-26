import styles from "@/components/SendMessageBox.module.css";
import { useMessages } from "@/hooks/useMessage";
import React, { useState } from "react";

type Props = {
  channelId: string;
};

const SendMessageBox = (props: Props) => {
  const [messages, setMessage] = useState("");
  const { postMessage } = useMessages(props.channelId);

  const onClickSend = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const requestMessage = {
      id: "example",
      body: messages,
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
        value={messages} 
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button onClick={onClickSend}>Send</button>
    </div>
  );
};

export default SendMessageBox;
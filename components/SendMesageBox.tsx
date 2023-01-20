import styles from "@/components/SendMessageBox.module.css";

const SendMessageBox = () => {
  return (
    <div className={styles.body}>
      <div className={styles.header}></div>
      <textarea className={styles["message-box"]}></textarea>
      <button>Send</button>
    </div>
  );
};

export default SendMessageBox;
import MessageTimeline from "@/components/MessageTimeline";
import styles from "@/pages/channels/ChannelPage.module.css";
import SendMessageBox from "@/components/SendMesageBox";

const ChannelPage = () => {
  const ms = [
    {
      id: "1",
      body: "inatonix",
      channelId: "1",
      createdAt: new Date(),
    },
    {
      id: "2",
      body: "Hello,world",
      channelId: "2",
      createdAt: new Date(),
    },
  ]

  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline messages={ms}></MessageTimeline>
      <SendMessageBox></SendMessageBox>
    </div>
  )
}

export default ChannelPage;
import MessageTimeline from "@/components/MessageTimeline";
import styles from "@/pages/channels/ChannelPage.module.css";
import { useMessages } from "@/hooks/useMessage";
import SendMessageBox from "@/components/SendMesageBox";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ChannelPage = () => {
  const { query } = useRouter();
  const { messages, fetchMessages } = useMessages();

  useEffect(() => {
    fetchMessages(query.channelId as string);
  }, [query.channelId]);
  
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline messages={messages}></MessageTimeline>
      <SendMessageBox></SendMessageBox>
    </div>
  )
}

export default ChannelPage;
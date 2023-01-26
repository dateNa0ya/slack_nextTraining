import MessageTimeline from "@/components/MessageTimeline";
import styles from "@/pages/channels/ChannelPage.module.css";
import { useMessages } from "@/hooks/useMessage";
import SendMessageBox from "@/components/SendMesageBox";
import { useEffect } from "react";
import { useRouter } from "next/router";

const ChannelPage = () => {
  const { query } = useRouter();
  const { messages } = useMessages(query.channelId as string);
  
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <h2>Title</h2>
      </div>
      <MessageTimeline messages={messages}></MessageTimeline>
      <SendMessageBox channelId={query.channelId as string}></SendMessageBox>
    </div>
  )
}

export default ChannelPage;
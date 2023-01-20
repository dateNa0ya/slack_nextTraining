import * as MessageType from "@/types/Message"
import Message from "@/components/Message";
import styles from "@/components/MessageTimeline.module.css"

type Props = {
  messages: MessageType.Message[];
}

const MessageTimeline = (props: Props) => {
  return (
    <div className={styles.body}>
      <ul>
        {props.messages.map(m => {
          return (
            <Message body={m.body}>
            </Message>
          )
        })}
      </ul>
    </div>
  )
};

export default MessageTimeline;
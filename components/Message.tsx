import styles from "@/components/Message.module.css"
import { AppContext } from "@/pages/_app";
import { useContext } from "react";

type Props = {
  body: string;
  children: React.ReactNode;
}

const Message = (props: Props) => {
  const { me } = useContext(AppContext);

  return (
    <>
      <li className={styles.body}>
        <div className={styles.left}>
          <div className={styles["profile-image"]}>
            <img src={me.profileImageUrl}></img>
          </div>
        </div>
        <div>
          <div className={styles.header}>
            <span>{me.name}</span>
            <span>{new Date().toDateString()}</span>
          </div>
          {props.body}
        </div>
      </li>
    </>
  )
};

export default Message;
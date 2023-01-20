import styles from './SidebarHeader.module.css';

type Props = {
  title: string;
};

const SidebarHeader = (props: Props) => {
  return <div className={styles.title}>{props.title}</div>
}

export default SidebarHeader;
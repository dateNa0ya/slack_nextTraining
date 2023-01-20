import styles from './Sidebar.module.css'
import SidebarHeader from './SidebarHeader'
import Link from 'next/link';
import { useAxios } from '@/hooks/useAxios';
import { useEffect } from 'react';
import { useChannels } from '@/hooks/useChannels';

const Sidebar = () => {
  const { channels } = useChannels()
  console.log(channels);

  return (
    <div className={styles.body}>
      <SidebarHeader title={"NextJS Slack"}></SidebarHeader>
      <ul>
        {channels.map((channel) => {
          return (
            <li key={channel.id} className={styles.channelTitle}>
              <Link href={`/channels/${channel.id}`}>
                <span>{channel.title}</span>
              </Link>
            </li>
          );
        })}
        {/* <li className={styles.channelTitle}>channel1</li>
        <li className={styles.channelTitle}>channel2</li> */}
      </ul>
    </div>
  )

};

export default Sidebar;
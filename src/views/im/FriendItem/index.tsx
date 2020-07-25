import React from 'react';
import styles from './FriendItem.module.scss';
import {Friend} from "../../../types/im";

type Props = {
  friend: Friend;
  active: boolean;
}

const FriendItem: React.FC<Props> = ({friend, active}) => {
  return (
    <div className={`${styles.friend} ${active ? styles.active : ''}`}>
      <div className={styles.avatar}>{friend.name[0]}</div>
      <div className={styles.name}>{friend.name}</div>
      <div className={styles.msg}>{friend.latestMessage}</div>
    </div>
  )
}

export default FriendItem;

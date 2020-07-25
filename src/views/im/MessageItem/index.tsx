import React, {useState} from 'react';
import styles from './MessageItem.module.scss';
import {MessageType} from "../../../types/im";

type Props = {
  message: MessageType;
}

const MessageItem: React.FC<Props> = ({message}) => {
  const [me] = useState({
    id: 'me',
  });
  return (
    <div className={`${styles.message} ${message.from.id === me.id ? styles.mine : ''}`}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>{message.from.name[0]}</div>
      </div>
      <div className={styles.main}>
        <div className={styles.name}>{message.from.name}</div>
        <div className={styles.content}>{message.message}</div>
      </div>
    </div>
  )
};

export default MessageItem;

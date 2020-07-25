import React, {useEffect, useRef} from 'react';
import styles from './ChatView.module.scss';
import {Friend, MessageType} from "../../../types/im";
import MessageItem from "../MessageItem";
import MessageInput from "../MessageInput";

type Props = {
  friend: Friend;
  messageList: MessageType[];
}

const ChatView: React.FC<Props> = ({friend, messageList}) => {
  const scrollDom = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (scrollDom.current) {
      scrollDom.current.scrollTop = scrollDom.current.scrollHeight;
    }
  }, [])
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.titleName}>{friend.name}</h2>
      </div>
      <div className={styles.list} ref={scrollDom}>
        <div className={styles.listWrapper}>
          <div className={styles.listWrapperSpace}/>
          <div className={styles.listWrapperContainer}>
            {
              messageList.map((message) => (
                <MessageItem message={message} key={message.id}/>
              ))
            }
          </div>
        </div>
      </div>
      <div className={styles.editor}>
        <MessageInput />
      </div>
    </div>
  )
};

export default ChatView;

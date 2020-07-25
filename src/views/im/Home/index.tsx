import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss';
import MockData from './Mock.json';
import FriendList from "../FriendList";
import {Friend, MessageType} from "../../../types/im";
import ChatView from "../ChatView";

const Home: React.FC = () => {
  const [friendList] = useState<Friend[]>(MockData.friends);
  const [messageList] = useState<MessageType[]>(MockData.messages);
  const [selectFriend, setSelectFriend] = useState<Friend | null>(null);
  useEffect(() => {
    if (friendList.length > 0) {
      setSelectFriend(friendList[0]);
    }
  }, [friendList]);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <FriendList
          friendList={friendList}
          activeFriend={selectFriend}
          setActiveFriend={setSelectFriend}
        />
      </div>
      <div className={styles.right}>
        {
          selectFriend && (
            <ChatView friend={selectFriend} messageList={messageList}/>
          )
        }
      </div>
    </div>
  )
};

export default Home;
